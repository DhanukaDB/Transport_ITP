import React ,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AddFeedback(){  //adding function

    //creating states
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState("");
 

  function sendData(e){  //create event send data
    e.preventDefault(); //execute setData function, when click submit button

      const newFeedback ={
        
        username,
        email,
        type,
        contactNumber,
        message 

      }

     axios.post(`http://localhost:8070/feedback/addf`, newFeedback).then(() =>{  //route from the backend

        alert("Student Added") //display if adding is successful
     }).catch((err) =>{   //display error if adding is not successful
        alert(err)
     })
  }

    return(
 
     <div>
        <form className="container"  onSubmit={sendData} > 

<div className="form-group">
    <label for="Username">Enter Username</label>
    <input type="text" className="form-control" id="username" aria-describedby="em" placeholder="Enter Username" 
    onChange={(e)=>{
      setUsername(e.target.value);
     }}   />
     
  </div>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address" onChange={(e) =>{
      setEmail(e.target.value);
     }}  />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  Type
  <div class="form-check">    
  <input class="form-check-input" type="radio" name="type" id="feedback" value="feedback"  onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="feedback">
    Feedback
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"   type="radio" name="type" id="complaint" value="complint" onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="complaint">
    Complaint
  </label>
</div>

<div class="form-group">
    <label for="contactNumber">Enter Contact Number</label>
    <input type="text" class="form-control" id="contactNumber" aria-describedby="em" placeholder="Contact Number" onChange={(e) =>{
      setContactNumber(e.target.value);
     }}  />
     
  </div>
 
  <div class="form-group">
    <label for="message">How was the experience?</label>
    <textarea class="form-control" id="message" rows="3" placeholder="Please include Vehicle number,Date and Time" onChange={(e) =>{
      setMessage(e.target.value);
     }}></textarea>
  </div>

  
  <button type="submit" class="btn btn-primary">Submit</button> <a href="/readf" class="btn btn-primary">View</a> <a href="/${id}" class="btn btn-primary">View yours</a>
       
</form>

 
</div>
    );
}