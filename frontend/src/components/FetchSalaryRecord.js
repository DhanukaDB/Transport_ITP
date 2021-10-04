import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";

//function to generate payroll pdf
const GeneratePayroll = payroll =>{
    const doc = new jsPDF({orientation:"p",lineHeight:1.5});
    const tableRows = [];
    const tableColumns = ["Employee ID(Rs)","Basic Salary(Rs)","OT(Rs)","Allowances(Rs)","Payroll Deductions(Rs)","Net Salary(Rs)","Salary Period"];
    
        const payrollData=[
            payroll.empID,
            payroll.basicSalary,
            payroll.OT,
            payroll.allowances,
            payroll.payrollDeduct,
            payroll.netSalary,
            payroll.salaryPeriod,
         
        ];

    tableRows.push(payrollData);
    
    doc.autoTable(tableColumns, tableRows, {startY:20});
    doc.text("Employee Payroll",14,15);
    doc.save(`Payroll of ${payroll.empID}.pdf`);
};


export default function FetchSalaryRecord() {
    
    const[basicSal, setbasicSal] = useState(parseInt(""));
    const[ot, setot] = useState(parseInt(""));
    const[allowances, setallowances] = useState(parseInt(""));
    const[payrollDeductions, setpayrollDeductions] = useState(parseInt(""));
    const[netSal, setnetSal] = useState(parseInt(""));
    const[salPeroid, setsalPeroid] = useState(parseInt(""));
    const[array,setarray] = useState(parseInt([]));

    const {id} = useParams();
   
    useEffect(()=>{
        
            axios.get(`http://localhost:5000/salary/fetchsal/${id}`).then((res)=>{
                console.log(res.data.salary);
                
                setbasicSal(res.data.salary.basicSalary);
                setot(res.data.salary.OT);
                setallowances(res.data.salary.allowances);
                setpayrollDeductions(res.data.salary.payrollDeduct);
                setnetSal(res.data.salary.netSalary);
                setsalPeroid(res.data.salary.salaryPeriod);
                setarray(res.data.salary);
                console.log(array);

            }).catch((err)=>{
                alert(err.message)
            })
    },[]);

    return(        
        <div className="container"><br/><br/>
         <nav className="nav">
            <Link to="/getallsal" className="nav-link">Back</Link>
         </nav><br/>
            <h1>Employee ID : {id}</h1><br/>
            <table className="table">
            <tr><th  style={{textAlign:"left"}} scope="col">Basic Salary  </th>  <td style={{textAlign:"left"}}>Rs.{basicSal}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">OT </th> <td style={{textAlign:"left"}}>Rs.{ot}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Allowances </th> <td style={{textAlign:"left"}}>Rs.{allowances}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Payroll Deductions </th> <td style={{textAlign:"left"}}>Rs.{payrollDeductions}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Salary Peroid </th> <td style={{textAlign:"left"}}>{salPeroid}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Net Salary </th> <td style={{textAlign:"left"}}>Rs.{netSal}</td></tr>           
            </table><br/><br/>

            <Button className="btn btn-primary" onClick={()=>GeneratePayroll(array)}>&nbsp;Download Payroll</Button>
            <br/><br/><br/>
            
        </div>
    )
}