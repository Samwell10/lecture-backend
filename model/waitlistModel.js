const mongoose = require('mongoose');
const Schema = mongoose.Schema

const WaitlistSchema = new Schema({
    name:{
        type:String,
        required: true,  
    },
    email:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    Designation: {
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Waitlist", WaitlistSchema);    