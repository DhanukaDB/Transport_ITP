import React from "react";
import "../assets/css/styles.css";


export default function AdminPanel() {

    return(
        <div>       
            <div className="bodyHome">
            <h1 style={{textAlign:'center'}}>ADMIN PANEL</h1>
            <br/><br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={``} style={{color:"white"}} >Reservation Management</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={``}  style={{color:"white"}}>Payment Management</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={``}  style={{color:"white"}}>Passenger Management</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={``}  style={{color:"white"}}>Timetable Management</a></button></td>
                </tr><br/>
                <tr>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/vhome`}  style={{color:"white"}}>Vehicle Management</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={``}  style={{color:"white"}}>Feedback Management</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={``}  style={{color:"white"}}>Driver Management</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/employeeManagementHome`}  style={{color:"white"}}>Employee Management</a></button></td>
                </tr>
                </table>
            </div>
        </div>
    );
}


