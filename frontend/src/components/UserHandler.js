import React from "react";
import {Image,Button} from "react-bootstrap";

const UserHandler = () => {
   return(
   <div >

    <div>  
        <center>
        <h1>Welcome to User Management Page</h1>
        <br></br><br></br><br></br><br></br>
        
         <Image className="userhandlerim" src="https://res.cloudinary.com/hidl3r/image/upload/v1633333670/itp/ss_u0yzsi.jpg" rounded  />
        </center>
        <br></br><br></br>
         
    </div>
        <div className="userhandlerdashboard" >
         <center>
         <Button variant="outline-primary" size="lg"> <a href="/passengerreport">Inform Offer</a></Button>{' '}    
         <Button variant="outline-success" size="lg"> <a href="/userlevel">Add UserLevels</a></Button>{' '} 
         <Button variant="outline-primary" size="lg"> <a href="userhandlerreport">View Report</a></Button>{' '} 
         <Button variant="outline-danger"  size="lg"> <a href="/AllPassengers">Remove Passengers </a></Button>{' '} 
         </center>
         </div>
    </div>
           

   )
}

export default UserHandler