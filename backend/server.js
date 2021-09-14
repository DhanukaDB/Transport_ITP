const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
  
const PORT = process.env.PORT || 5000;

app.use(cors());
/*app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: trues
  })); */

app.use(bodyParser.json());



const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB connection Success!!!");
})

const vehicleRouter = require("./routes/vehicle.js");
app.use("/vehicle",vehicleRouter); 
 
 
const reviewRouter =require("./routes/Review.js");

app.use("/Review",reviewRouter);


//give access to employee router file
const employeeRouter = require("./routes/Employees.js");
app.use("/employee", employeeRouter);//1st parameter is the url name to call js file
//give access to salaryInfo router file
const salaryRouter = require("./routes/SalaryInfo");
app.use("/salary", salaryRouter);//1st parameter is the url name to call js file

//Passenger_ IT20190798
const passegerRouter = require("./routes/passengers.js");
app.use("/passenger", passegerRouter);

//IT20205256-Payment
const paymentRouter = require("./routes/payments.js");
app.use("/payment",paymentRouter);

//IT20192532-Reservation
//import routes
const postRoutes = require("./routes/bookings");
//route middleware
app.use(postRoutes);

//IT20201982-Time table
const timeRouter = require("./routes/times.js");
app.use("/time",timeRouter);

//IT20201296 Driver management
const driverRoutes = require('./routes/driver.js');
app.use(driverRoutes);

//IT20198954

const feedbackRouter =require("./routes/Feedback.js"); //import  feedback routes
app.use("/feedback",feedbackRouter); //create feedback routes
  
const empFeedbackRouter =require("./routes/EmpFeedback.js"); 
app.use("/empFeedback",empFeedbackRouter);


app.listen(PORT, () => {
    console.log(`Server running on port no :${PORT}`)})