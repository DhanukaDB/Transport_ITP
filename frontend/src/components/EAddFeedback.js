import React ,{useState, useEffect} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
 
export default function EAddFeedback(){  //adding function

    //creating states
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState("");
 

  function sendData(e){  //create event send data

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){ //validate email address
      alert("Incorrect Email type");
      return
  }

    e.preventDefault(); //execute setData function, when click submit button

      const newFeedback ={
        
        username,
        email,
        type,
        contactNumber,
        message 

      }

     axios.post(`http://localhost:5000/empFeedback/addfe`, newFeedback).then(() =>{  //route from the backend

        alert("Feedback Added.Mail us for any updates or inqueries- siyathatravels@gmail.com") //display if adding is successful
        window.location = `/addfe`;  //redirect to adding page
     }).catch((err) =>{   //display error if adding is not successful
        alert(err)
     })
  }

    return(
 
     <div> 
       <br></br>

       <blockquote class="blockquote">
  <h1 class="mb-0">Complaints and Feedback</h1>
  <footer class="blockquote-footer">Show us some love....<cite title="Source Title"> </cite></footer>
</blockquote>
       
       <br></br>
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
  <input class="form-check-input"   type="radio" name="type" id="complaint" value="complaint" onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="complaint">
    Complaint
  </label>
</div>
<br></br>
<div class="form-group">
    <label for="contactNumber">Enter Contact Number</label>
    <input type="text" class="form-control" id="contactNumber" aria-describedby="em" placeholder="Contact Number" onChange={(e) =>{
      setContactNumber(e.target.value);
     }}  />
     
  </div>
 
  <div class="form-group">
    <label for="message">How was the experience?</label>
    <textarea class="form-control" id="message" rows="3" placeholder="Please include Passenger's seat number,Date and Time" onChange={(e) =>{
      setMessage(e.target.value);
     }}></textarea>
  </div>

  
  <Button type="submit" variant="primary">Submit</Button>
  <Button variant="light" ><Link to ="/readfe"> View some feedbacks</Link></Button>{' '}  
      

             
</form>

 
</div>
    );
}