import React from "react";
import "../assets/css/styles.css";

export default function EmployeeManagementHome(){
    return(
        <div className="containerHomeEmp"><br/><br/>
        
            <div className="bodyHomeEmp">
            <h1 style={{color:'white'}}>EMPLOYEE MANAGEMENT</h1>
            <br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/allemployee`} style={{color:"white"}}><i class="fas fa-address-card"></i>&nbsp;Employee Details</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/addemp`}  style={{color:"white"}}><i class="fas fa-user-plus"></i>&nbsp;Register Employee</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/getallsal`}  style={{color:"white"}}><i class="fas fa-info-circle"></i>&nbsp;Salary Details</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/entersal`}  style={{color:"white"}}><i class="fas fa-plus"></i>&nbsp;Add Salary</a></button></td>
                </tr>
                </table>
            </div>
        </div>
    )
}