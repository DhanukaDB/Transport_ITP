import React from "react";
 
 

const FeedbackHandler= () => {
   return(
   <div className="fbhome">

    <div>  
        <center>
         
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
        </center>
        <br></br>  
         
    </div>
        <div >
         <center>
         <br></br>  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> 
    
           <a className="btn btn-danger btn-lg" href="/readfadmin">View Feedbacks for Drivers</a> {' '} 
          <a className="btn btn-danger btn-lg" href="/readfeadmin">View Feedbacks for Passengers</a> {' '} <br></br><br></br>
          <a className="btn btn-warning btn-lg" href="/updatef">Manage  Feedbacks for Drivers</a> {' '} 
           
          <a className="btn btn-warning btn-lg" href="/updatefe">Manage Feedbacks for Passengers</a> {' '} 
          
         </center>
         </div>
    </div>
           

   )
}

export default FeedbackHandler