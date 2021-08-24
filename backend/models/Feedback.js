const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    feedbackID :{
        type: String,
        required :true
    },

    username :{
        type: String,
        required :true
    },

    email :{
        type: String,
        required :true
    },

    type :{
        type: String,
        required :true
    },

    contactNumber :{
        type: String,
        required :true
    },

    message :{
        type: String,
        required :true
    },

    passengerFeedback :{
        type: Boolean,
        required :true
    },

    driverFeedback :{
        type: Boolean,
        
    }
})

const Feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = Feedback;