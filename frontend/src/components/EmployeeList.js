import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EmployeeList() {

    //set state
    const[employees, setemployees] = useState([]);//array
    

    useEffect(()=>{
        function getEmployees(){
            //code segment related to from where data get and how
            axios.get("http://localhost:5000/employee/allemployee").then((res)=>{
                console.log(res.data);
                setemployees(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getEmployees();
        
    },[]);
    
   

    return(
        <div className="container"><br/>
          <nav className="nav">
            <Link to="/employeeManagementHome" className="nav-link">Home</Link>
          </nav><br/>
          <form className="d-flex">
                <input className="form-control form-controlEmp me-2" type="search" placeholder="Search" />
                
          </form><br/><br/>
            <h1 style={{textAlign:'center'}}>Employee List</h1><hr/><br/>
            {employees.map((val, key)=>{
                return<div key={key} className="container"><table className="table">
                <thead>
                  <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <th valign="middle" scope="row">
                      <a href={`/getemp/${val.empID}`} style={{textDecoration:'none'}}>
                      {val.empID}
                      </a>
                      </th>
                    <td valign="middle">{val.full_name}</td>
                    <td valign="middle">{val.gender}</td>
                    <td valign="middle">{val.nic}</td>                    
                    <td valign="middle">{val.phoneNo}</td>
                    <td valign="middle">{val.email}</td>

                    <td><button className="btn btnEmp btn-primary custom"><a className="nounderline" href={`/updateemp/${val.empID}`} style={{color:'white'}} ><i className="fas fa-edit"></i>&nbsp;Edit</a></button><br/><br/>
                    <button className="btn btnEmp btn-danger custom"><a className="nounderline" href={`/deleteemp/${val.empID}`} style={{color:'white'}} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</a></button></td>
                  </tr>
                  
                </tbody>
              </table><br/><br/></div>
            })}
            
        </div>
    )
}