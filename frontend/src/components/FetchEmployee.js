import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function FetchEmployee() {
    
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
        
            axios.get(`http://localhost:8070/employee/get/${id}`).then((res)=>{
                console.log(res.data.employee);

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

    return(
      
        
        <div className="container"><br/><br/>
         <nav className="nav">
            <Link to="/" className="nav-link">Back</Link>
         </nav><br/>
            <h1>Employee ID : {id}</h1><br/>
            <table className="table">
            <tr><th  style={{textAlign:"left"}} scope="col">Full Name  </th>  <td style={{textAlign:"left"}}>{full_name}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">DOB </th> <td style={{textAlign:"left"}}>{dob}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Age </th> <td style={{textAlign:"left"}}>{age}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Gender </th> <td style={{textAlign:"left"}}>{gender}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">NIC </th> <td style={{textAlign:"left"}}>{nic}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Nationality </th> <td style={{textAlign:"left"}}>{nationality}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Marital Status </th> <td style={{textAlign:"left"}}>{marital_status}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Contact No. </th> <td style={{textAlign:"left"}}>{phoneNo}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Email </th> <td style={{textAlign:"left"}}>{email}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Postal Address </th> <td style={{textAlign:"left"}}>{add}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Registered Date </th> <td style={{textAlign:"left"}}>{regDate}</td></tr>
                                
            
            </table><br/><br/>
            
        </div>
    )
}