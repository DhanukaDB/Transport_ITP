import React from "react";
import {Image,Button} from "react-bootstrap";

const UserHandler = () => {
   return(
   <div >

    <div>  
        <center>
        <h1>Welcome to User Management Page</h1>
        <br></br><br></br><br></br><br></br>
         <Image src ="bsingup.jpg"/>
        </center>
        <br></br><br></br>
         
    </div>
        <div className="userhandlerdashboard" >
         <center>
             
         <Button variant="outline-primary" size="lg"> <a href="/preport">View Report</a></Button>{' '} 
         <Button variant="outline-success" size="lg"> <a href="/userlevel">Add UserLevels</a></Button>{' '} 
         <Button variant="outline-danger"  size="lg"> <a href="/AllPassengers">Remove Passengers </a></Button>{' '} 
         </center>
         </div>
    </div>
           

   )
}

export default UserHandler