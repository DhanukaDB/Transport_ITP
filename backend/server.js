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
 

const feedbackRouter =require("./routes/Feedback.js");

app.use("/Feedback",feedbackRouter);

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


app.listen(PORT, () => {
    console.log(`Server running on port no :${PORT}`)})