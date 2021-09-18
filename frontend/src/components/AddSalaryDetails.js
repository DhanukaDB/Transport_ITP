import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddSalaryDetails(){
    const[empID, setEmpID] = useState("");
    const[basicSalary, setbasicSalary] = useState("");
    const[OT, setOT] = useState("");
    const[allowances, setallowances] = useState("");
    const[payrollDeduct, setpayrollDeduct] = useState("");
    const[netSalary, setnetSalary] = useState("");
    const[salaryPeriod, setsalaryPeriod] = useState("");


    
    function sendSalData(e){

        e.preventDefault();//to prevent normal behavior of submit
       
        const newSalary ={
            empID ,
            basicSalary,
            OT, 
            allowances,
            payrollDeduct,
            salaryPeriod
        }
      
        axios.post("http://localhost:5000/salary/entersal",newSalary).then(()=>{
            alert("New Salary Record Added");
            window.location = `/getallsal`;
            
        }).catch((err)=>{
            alert("err");
        })

    }

    return(
        <div className="container"><br/>
         <nav className="nav">
            <Link to="/employeeManagementHome" className="nav-link">Home</Link>
         </nav><br/><br/>
            <h1>Add New Salary Record</h1><br/>
            <form className="form formEmp" onSubmit={sendSalData}>
                <div className="mb-3">
                    <label for="empID" className="form-label">Employee ID</label>
                    <input type="text" className="form-control form-controlEmp" id="empID" onChange={(e)=>{
                        setEmpID(e.target.value);//updating state using value taken from the form 
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="basicSalary" className="form-label">Basic Salary(Rs.)</label>
                    <input type="text" className="form-control form-controlEmp" id="basicSalary" onChange={(e)=>{
                        setbasicSalary(e.target.value);//updating state using value taken from the form 
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="OT" className="form-label">OT(Rs.)</label>
                    <input type="text" className="form-control form-controlEmp" id="OT" onChange={(e)=>{
                        setOT(e.target.value);//updating state using value taken from the form 
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="allowances" className="form-label">Allowances(Rs.)</label>
                    <input type="text" class="form-control form-controlEmp" id="allowances" onChange={(e)=>{
                        setallowances(e.target.value);//updating state using value taken from the form 
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="payrollDeduct" className="form-label">Payroll Deductions(Rs.)</label>
                    <input type="text" className="form-control form-controlEmp" id="payrollDeduct" onChange={(e)=>{
                        setpayrollDeduct(e.target.value);//updating state using value taken from the form 
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="salaryPeriod" className="form-label">Salary Period</label>
                    <input type="text" className="form-control form-controlEmp" id="salaryPeriod" onChange={(e)=>{
                        setsalaryPeriod(e.target.value);//updating state using value taken from the form 
                    }}/>
                </div>
                
                <button type="submit" className="btn btnEmp btn-primary"><i class="fas fa-plus"></i>&nbsp;Add Record</button>
            </form><br/><br/>
        </div>
    )
}