import React from "react";
import {Image,Button} from "react-bootstrap";
 

const FeedbackHandler= () => {
   return(
   <div className="fbhome">

    <div>  
        <center>
        <h1>WELCOME TO FEEDBACK MANAGEMENT</h1>
        <h1>HOME PAGE</h1>
        <br></br><br></br><br></br><br></br>
          
        </center>
        <br></br>  
         
    </div>
        <div >
         <center>
             
           <a className="btn btn-danger btn-lg" href="/readfadmin">Manage Passenger feedbacks</a> {' '} 
          <a className="btn btn-warning btn-lg" href="/readfeadmin">Manage Driver feedbacks</a> {' '} 
           
         </center>
         </div>
    </div>
           

   )
}

export default FeedbackHandler