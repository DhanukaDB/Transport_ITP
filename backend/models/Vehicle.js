const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema =  new Schema({

    vehicleNo : {
        type : String,
        required: true
    },

    vModel : {
        type : String,
        required: true
    },

    manufacYear :{
        type: Number,
        required: true
    },

    ownerName:{
        type:String,
        required: true
    },



})

const Vehicle = mongoose.model("Vehicle",vehicleSchema);

module.exports = Vehicle;   