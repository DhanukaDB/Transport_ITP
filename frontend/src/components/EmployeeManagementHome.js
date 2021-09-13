import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import "../assets/css/styles.css";

export default function EmployeeManagementHome(){
    return(
        <div className="containerHome"><br/><br/>
        
            <div className="bodyHome">
            <h1 style={{color:'white'}}>EMPLOYEE MANAGEMENT</h1>
            <br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/allemployee`} style={{color:"white"}} >Employee Details</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/add`}  style={{color:"white"}}>Register Employee</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/getall`}  style={{color:"white"}}>Salary Details</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/enter`}  style={{color:"white"}}>Add Salary</a></button></td>
                </tr>
                </table>
            </div>
        </div>
    )
}