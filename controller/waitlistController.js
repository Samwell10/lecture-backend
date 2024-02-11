const waitlistModel = require("../model/waitlistModel")
const mongoose = require('mongoose')
//to post todo
const postWaitlist = async(req, res)=>{
    const {name, email, phoneNumber, Designation} = req.body;
    try{
        const Waitlist = await waitlistModel.create({name, email, phoneNumber, Designation})
        res.status(200).json(Waitlist)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    postWaitlist
}