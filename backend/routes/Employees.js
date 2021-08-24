const router = require("express").Router();
let Employee = require("../models/Employee");

//add employee route
router.route("/add").post((req,res)=>{
    const empID = req.body.empID;
    const full_name = req.body.full_name;
    const dob = Date(req.body.dob);
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const nic = req.body.nic;
    const nationality = req.body.nationality;
    const marital_status = req.body.marital_status;
    const phoneNo = Number(req.body.phoneNo);
    const email = req.body.email;
    const add = req.body.add;

    const newEmployee = new Employee({
        empID,
        full_name,
        dob,
        age,
        gender,
        nic,
        nationality,
        marital_status,
        phoneNo,
        email,
        add
    })

    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//get all employees details to frontend route
router.route("/").get((req,res)=>{
    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err);
    })

})

//update route
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;//id comes as a url parameter
    //destructure-frontend variables pass to backend as a object
    const {full_name,dob,age,gender,nic,nationality,marital_status,phoneNo,email,add} = req.body;

    const updateEmployee = {
        empID,
        full_name,
        dob,
        age,
        gender,
        nic,
        nationality,
        marital_status,
        phoneNo,
        email,
        add
    }
    const update = await Employee.findByIdAndUpdate(userId,updateEmployee)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })
    
})

//delete route
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deletion", error:err.message});
    })
})

//get data of one employee
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Employee.findById(userId).then((employee)=>{
        res.status(200).send({status:"User fetched", employee});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching user", error:err.message});
    })
})

module.exports = router;