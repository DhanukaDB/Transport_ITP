import React from "react";
import { withRouter } from "react-router";
import "../assets/css/styles.css";


function AdminPanel() {

    return(
        <div>       
            <div className="bodyHomeEmp">
            <h1 style={{textAlign:'center'}}>ADMIN PANEL</h1>
            <br/><br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={``} style={{color:"white"}} >Reservation Management</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/allpayment`}  style={{color:"white"}}>Payment Management</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={``}  style={{color:"white"}}>Passenger Management</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/viewTimetable`}  style={{color:"white"}}>Timetable Management</a></button></td>
                </tr><br/>
                <tr>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/vHome`}  style={{color:"white"}}>Vehicle Management</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={``}  style={{color:"white"}}>Feedback Management</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`driverhome`}  style={{color:"white"}}>Driver Management</a></button></td>
                <td><button className="btn btnEmp btn-primary customhomeEmp"><a className="nounderline" href={`/employeeManagementHome`}  style={{color:"white"}}>Employee Management</a></button></td>
                </tr>
                </table>
            </div>
        </div>
    );
}

export default withRouter (AdminPanel);

