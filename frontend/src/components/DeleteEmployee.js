import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function DeleteEmployee() {

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
    const[regDate, setregDate] = useState("");
    

    const {id} = useParams();

    useEffect(()=>{
       
            axios.get(`http://localhost:5000/employee/get/${id}`).then((res)=>{
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
                setregDate(res.data.employee.regDate);


            }).catch((err)=>{
                alert(err.message)
            })
        
       
    },[]);

    
    function onSubmitDelete(e) {
        e.preventDefault();
        axios.delete(`http://localhost:5000/employee/delete/${id}`).then(()=>{
            alert("Employee Deleted");
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
            <h1>Delete Employee : {id}</h1><br/>
            <form className="form formEmp" onSubmit={onSubmitDelete}>
                <div className="mb-3">
                    <label for="empID" className="form-label">Employee ID</label>
                    <input type="text" className="form-control form-controlEmp" id="empID" value={empID} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control form-controlEmp" id="full_name" value={full_name} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="dob" className="form-label">Date of Birth</label>
                    <input type="text" className="form-control form-controlEmp" id="dob" value={dob} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="age" className="form-label">Age</label>
                    <input type="number" class="form-control form-controlEmp" id="age" min="18" max="70" value={age} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control form-controlEmp" id="gender" value={gender} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="nic" className="form-label">NIC</label>
                    <input type="text" className="form-control form-controlEmp" id="nic" maxlength="10" value={nic} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="nationality" className="form-label">Nationality</label>
                    <input type="text" className="form-control form-controlEmp" id="nationality" value={nationality} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="marital_status" className="form-label">Marital Status</label>
                    <input type="text" className="form-control form-controlEmp" id="marital_status" value={marital_status} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="phoneNo" className="form-label">Contact Number</label>
                    <input type="text" className="form-control form-controlEmp" id="phoneNo" maxlength="10" value={phoneNo} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control form-controlEmp" id="email" value={email} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="add" className="form-label">Postal Address</label>
                    <input type="text" className="form-control form-controlEmp" id="add" value={add} disabled="disabled"/>
                </div>
                <div className="mb-3">
                    <label for="regDate" className="form-label">Date of Registration</label>
                    <input type="text" className="form-control form-controlEmp" id="regDate" value={regDate} disabled="disabled"/>
                </div>
              
                <button type="submit" className="btn btnEmp btn-danger"><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>
            </form><br/><br/>

        </div>
    );
}   