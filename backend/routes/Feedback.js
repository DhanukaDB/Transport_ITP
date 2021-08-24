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
router.route("/update/:fid").put(async(req,res)=> {
       let userId= req.params.fid;
       const {feedbackID,username,email,type,contactNumber,message,passengerFeedback,driverFeedback} =req.body;

       const updateStudent= {
        feedbackID,
        username,
        email,
        type,
        contactNumber,
        message,
        passengerFeedback,
        driverFeedback
       }

       const update = await Feedback.findByIdAndUpdate(userId, updateFeedback).then(() =>{
        res.status(200).send({status: "User updated",user:update})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})

router.route("/delete/:fid").delete(async(req,res) =>{
       let userId=req.params.fid;

       await Feedback.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
       
})
module.exports = router;