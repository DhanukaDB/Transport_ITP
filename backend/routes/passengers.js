const router = require("express").Router();
let Passenger = require("../models/Passenger");

router.route("/add").post((req,res) => {
    const username = req.body.username;
    const nic      = req.body.nic;
    const email    = req.body.email;
    const phoneno  = Number(req.body.phoneno);
    const gender   = req.body.gender;

    const newPassenger = new Passenger({
        username,
        nic,
        email,
        phoneno,
        gender

    })

    newPassenger.save().then(() => {
         res.json("Passenger Added")

    }).catch((err) => {
        console.log(err);
    })
   
})


router.route("/").get((req,res) => {
     
    Passenger.find().then((passengers) => {
        res.json(passengers)

    }).catch((err) => {
        console.log(err)
    })


})


router.route("/update/:id").put(async (req, res) => {
      let userId = req.params.id;
      const {username, nic,email, phoneno,gender} = req.body;

      const updatePassenger = {
          username,
          nic,
          email,
          phoneno,
          gender
      }


      const update = await Passenger.findByIdAndUpdate(userId, updatePassenger).then(() => {
        res.status(200).send({status: "User updated"})
      }).catch((err) => {
          console.log(err);
          res.status(500).send({status: "Error with updating data", error: err.message});
      })   
})


router.route("/delete/:id").delete(async (req, res) => {
      let userId = req.params.id;
      
      await Passenger.findByIdAndDelete(userId).then(() => {
          res.status(200).send({status: "User deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete user", error: err.message});
      })
    })


router.route("/get/:id").get(async(req, res) => {

    let userId = req.params.id;
    const user = await Passenger.findById(userId).then((passenger) => {
        res.status(200).send({status: " User fetched", passenger})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get user" , error: err.message})
    })
})


module.exports = router;