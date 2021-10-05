import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GenerateEmpReport = tickets =>{
    const doc = new jsPDF({orientation:"landscape",lineHeight:1.5});
    const tableColumns = ["EmpID","Full name","DOB","Age","Gender","NIC","Nationality","Marital status","Contact No.","Email","Address","Registered date"];
    const tableRows = [];

    tickets.forEach(ticket => {
        const ticketData=[
            ticket.empID,
            ticket.full_name,
            ticket.dob,
            ticket.age,
            ticket.gender,
            ticket.nic,
            ticket.nationality,
            ticket.marital_status,
            ticket.phoneNo,
            ticket.email,
            ticket.add,
            ticket.regDate
        ];
        tableRows.push(ticketData); 
    });

    doc.autoTable(tableColumns,tableRows,{startY:20});
    doc.text("Employees Registered within a month",14,15);
    doc.save(`Employee_MonthlyReport.pdf`);
};

const EmployeereportRender = () =>{
    const[reports,setReports]=useState([]);
    const[getmonth,setgetmonth]=useState(0);

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

    
    const reportEmployee = reports.filter(ticket=>ticket.regDate.substring(5, 7)==getmonth);
    const filterEmp = ticket=>ticket.regDate.substring(5, 7)==getmonth;

    return(
        <div className="container"><br/><br/>
            <form className="d-flex">
                <input 
                className="form-control me-2" 
                type="getmonth" 
                placeholder="Enter Month"
                name = "getmonthQueryEmp"
                onChange = {(e)=>setgetmonth(e.target.value)} />
             </form><br/><br/>

            <button className="btn btn-primary" onClick={()=>GenerateEmpReport(reportEmployee)}>Generate Report</button>
            <br/><br/>
            {reports.filter(filterEmp).map((val, key)=>{
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
                      <a href={`/fetchsal/${val.empID}`} style={{textDecoration:'none'}}>
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