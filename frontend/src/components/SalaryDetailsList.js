import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SalaryDetailsList() {

    //set state
    const[salary, setsalary] = useState([]);//array

    
    useEffect(()=>{
        function getSalaryList(){
            //code segment related to from where data get and how
            axios.get("http://localhost:5000/salary/getall").then((res)=>{
                console.log(res.data);
                setsalary(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getSalaryList();
        
    },[]);

    function onDelete(id)  {
      
      axios.delete(`http://localhost:5000/salary/remove/${id}`).then(()=>{
          alert("Salary Record Deleted");
          window.location = `/getall`;
          
      }).catch((err)=>{
          console.log(err);
          alert(err);
      })
  }
    

    return(
        <div className="container"><br/>
        <nav className="nav">
            <Link to="/employeeManagementHome" className="nav-link">Home</Link>
        </nav><br/><br/> 
            <div className="container">
          <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" />
                
          </form><br/><br/>
            <h1 style={{textAlign:'center'}}>Salary Details</h1><hr/>
            {salary.map((val, key)=>{
                return<div key={key} className="container"><table className="table">
                <thead>
                  <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Basic Salary</th>
                    <th scope="col">OT</th>
                    <th scope="col">Allowances</th>
                    <th scope="col">Payroll Deductions</th>
                    <th scope="col">Salary Peroid</th>
                    <th scope="col">Actions</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th valign="middle" scope="row">{val.empID}</th>
                    <td valign="middle">Rs.{val.basicSalary}</td>
                    <td valign="middle">Rs.{val.OT}</td>
                    <td valign="middle">Rs.{val.allowances}</td>                    
                    <td valign="middle">Rs.{val.payrollDeduct}</td>
                    <td valign="middle">{val.salaryPeriod}</td>

                    <td><button className="btn btn-danger custom" onClick={()=>{onDelete(val.empID)}}><i className="fas fa-trash-alt"></i>&nbsp;Delete</button></td>

                  </tr>
                  
                </tbody>
              </table><br/><br/></div>
            })}
            </div>
        </div>
    )
}