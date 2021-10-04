import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";



const EmployeereportRender = () =>{
    const[reports,setReports]=useState([]);
    

    useEffect( () => {
        function getEmployeeOnMonth(){
            axios.get("http://localhost:5000/employee/allemployee").then((res)=>{
                console.log(res.data);
                setReports(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getEmployeeOnMonth();
    }, []);

    


    return(
        <div className="container"><br/><br/>
            <form className="d-flex">
            
             </form><br/><br/>

            <button className="btn btn-primary">Generate Report</button>
            <br/><br/>
            {reports.map((val, key)=>{
                return<div key={key} className="container"><table className="table">
                <thead>
                  <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">Marital Status</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <th valign="middle" scope="row">
                      <a href={`/get/${val.empID}`} style={{textDecoration:'none'}}>
                      {val.empID}
                      </a>
                      </th>
                    <td valign="middle">{val.full_name}</td>
                    <td valign="middle">{val.dob}</td>
                    <td valign="middle">{val.age}</td>
                    <td valign="middle">{val.gender}</td>
                    <td valign="middle">{val.nationality}</td>
                    <td valign="middle">{val.marital_status}</td>
                    <td valign="middle">{val.nic}</td>                    
                    <td valign="middle">{val.phoneNo}</td>
                    <td valign="middle">{val.email}</td>
                    <td valign="middle">{val.add}</td>
                  </tr>
                  
                </tbody>
              </table><br/><br/></div>
            })}
           
        </div>
    );
}       

export default EmployeereportRender;