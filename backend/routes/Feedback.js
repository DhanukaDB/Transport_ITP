const router= require("express").Router();
let Feedback = require("../models/Feedback");

router.route("/add").post((req,res)=> {


    const feedbackID=req.body.feedbackID;
    const username = req.body.username;
    const email=req.body.email;
    const type=req.body.type;
    const contactNumber=req.body.contactNumber;
    const message=req.body.message;
    const passengerFeedback=req.body.passengerFeedback;
    const driverFeedback=req.body.riverFeedback

    const newFeedback= new Feedback({
        feedbackID,
        username,
        email,
        type,
        contactNumber,
        message,
        passengerFeedback,
        driverFeedback
    })

    newFeedback.save().then(()=>{
        //to be executed if successful
        res.json("Feedback Added")
    }).catch((err)=>{
              console.log(err);
    })

})

router.route("/").get((req,res)=>{               //view
      Feedback.find().then((Feedback)=>{
            res.json(Feedback)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })

//update
router.route("/update/:feedbackID").put(async(req,res)=> {
       let userId= req.params.feedbackID;
       const { username,email,type,contactNumber,message,passengerFeedback,driverFeedback} =req.body; //destructure

       const updateFeedback= {       
        username,
        email,
        type,
        contactNumber,
        message,
        passengerFeedback,
        driverFeedback
       }

       const update = await Feedback.findOneAndUpdate(userId, updateFeedback).then(() =>{
        res.status(200).send({status: "User updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})

router.route("/delete/:feedbackID").delete(async(req,res) =>{
       let userId=req.params.feedbackID;

       await Feedback.findOneAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
       
})
 

module.exports = router;