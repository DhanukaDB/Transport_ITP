const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({

  username : {
        type : String,
        require: true
  },

  nic : {
        type : String,
        require: true
  },

   email :{
         type: String,
         require: true
   },

   phoneno : {
          type: Number,
          require: true
   },

   gender: {
    type: String,
    require: true
   }

})

const Passenger = mongoose.model("Passenger", passengerSchema);

module.exports = Passenger;
