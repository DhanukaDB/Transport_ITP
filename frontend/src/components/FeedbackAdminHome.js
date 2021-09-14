import React from 'react'
import { Button } from "react-bootstrap";

 
const feedbackHandler=() =>{
    return(
        <div>
            <center> <h1>Welcome to Feedback Management</h1>
            <br></br>  <br></br>  <br></br>  <br></br>
             

            <button type="button" class="btn btn-danger"><a href="/readfadmin">View Passenger Feedbacks and complaints</a></button>
            <button type="button" class="btn btn-danger"><a href="/readfeadmin">View Driver Feedbacks and complaints</a></button>
        </center> </div>
    )
}