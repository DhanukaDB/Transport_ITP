import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export default function UpdateEmployee() {

    const[empID, setEmpID] = useState("");
    const[full_name, setfull_name] = useState("");
    const[dob, setdob] = useState("");
    const[age, setage] = useState("");
    const[gender, setgender] = useState("");
    const[nic, setnic] = useState("");
    const[nationality, setnationality] = useState("");
    const[marital_status, setmarital_status] = useState("");
    const[phoneNo, setphoneNo] = useState("");
    const[email, setemail] = useState("");
    const[add, setadd] = useState("");
    
    

    const {id} = useParams();

    useEffect(()=>{
       
            axios.get(`http://localhost:5000/employee/getemp/${id}`).then((res)=>{
                console.log(res.data);
                console.log(res.data.employee.full_name);
                setEmpID(res.data.employee.empID);
                setfull_name(res.data.employee.full_name);
                setdob(res.data.employee.dob);
                setage(res.data.employee.age);
                setgender(res.data.employee.gender);
                setnic(res.data.employee.nic);
                setnationality(res.data.employee.nationality);
                setmarital_status(res.data.employee.marital_status);
                setphoneNo(res.data.employee.phoneNo);
                setemail(res.data.employee.email);
                setadd(res.data.employee.add);
                


            }).catch((err)=>{
                alert(err.message)
            })
        
       
    },[]);

    function onSubmit(e) {
        //form input validations
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert("Invalid Email!");
            return
        }
        else if(!(full_name.trim().length > 5)){
            alert("Invalid Full Name!");
            return
        }
        else if(phoneNo.trim().length != 10){
            alert("Invalid Phone Number!");
            return
        }
       

        e.preventDefault();
        const updateEmployee={

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

        axios.put(`http://localhost:5000/employee/updateemp/${id}`, updateEmployee).then(()=>{
            alert("Employee Updated");
            window.location = `/allemployee`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }


    return(
        <div className="container"><br/>
        <nav className="nav">
            <Link to="/allemployee" className="nav-link">Back</Link>
         </nav><br/><br/>
            <h1>Edit Employee Details</h1><br/>
            <form className="form formEmp" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label for="empID" className="form-label">Employee ID</label>
                    <input type="text" className="form-control form-controlEmp" id="empID" value={id} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control form-controlEmp" id="full_name" value={full_name} onChange={(e)=>{
                        setfull_name(e.target.value);//updating state using value taken from the form 
                    }} required/>
                </div>
                <div className="mb-3">
                    <label for="dob" className="form-label">Date of Birth</label>
                    <input type="text" className="form-control form-controlEmp" id="dob" value={dob} onChange={(e)=>{
                        setdob(e.target.value);//updating state using value taken from the form 
                    }} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="age" className="form-label">Age</label>
                    <input type="number" class="form-control form-controlEmp" id="age" min="18" max="70" value={age} onChange={(e)=>{
                        setage(e.target.value);//updating state using value taken from the form 
                    }} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control form-controlEmp" id="gender" value={gender} onChange={(e)=>{
                        setgender(e.target.value);//updating state using value taken from the form 
                    }} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="nic" className="form-label">NIC</label>
                    <input type="text" className="form-control form-controlEmp" id="nic" maxlength="10" value={nic} onChange={(e)=>{
                        setnic(e.target.value);//updating state using value taken from the form 
                    }} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="nationality" className="form-label">Nationality</label>
                    <input type="text" className="form-control form-controlEmp" id="nationality" value={nationality} onChange={(e)=>{
                        setnationality(e.target.value);//updating state using value taken from the form 
                    }} required/>
                </div>
                <div className="mb-3">
                    <label for="marital_status" className="form-label">Marital Status</label>
                    <input type="text" className="form-control form-controlEmp" id="marital_status" value={marital_status} onChange={(e)=>{
                        setmarital_status(e.target.value);//updating state using value taken from the form 
                    }} required/>
                </div>
                <div className="mb-3">
                    <label for="phoneNo" className="form-label">Contact Number</label>
                    <input type="text" className="form-control form-controlEmp" id="phoneNo" maxlength="10" value={phoneNo} onChange={(e)=>{
                        setphoneNo(e.target.value);//updating state using value taken from the form 
                    }} required/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control form-controlEmp" id="email" value={email} onChange={(e)=>{
                        setemail(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="add" className="form-label">Postal Address</label>
                    <input type="text" className="form-control form-controlEmp" id="add" value={add} onChange={(e)=>{
                        setadd(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
              
                <button type="submit" className="btn btnEmp btn-warning"><i className="fas fa-edit"></i>&nbsp;Edit</button>
            </form><br/><br/>
        </div>
    )
}