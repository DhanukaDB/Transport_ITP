import React, {useState, useEffect} from 'react';
import axios from "axios";  //send our form data to the mock server
import { NavLink } from "react-router-dom";
import { Button,Table,useParams } from "react-router-dom";
 

export default function EAllFeedbacks(){   

    //creating states
    const[feedbackList,SetFeedbackList] = useState([]);

    const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState("");
 

    useEffect(() =>{ //view all the feedbacks
        axios.get(`http://localhost:5000/empFeedback/readfe`).then((response) => { //pass response as a function
        axios.get(`http://localhost:8070/empFeedback/readfe`).then((response) => { //pass response as a function
          SetFeedbackList(response.data);
        });
      }, []);
      
      const onDelete = (_id) => { //delete data row
        axios.delete(`http://localhost:5000/empFeedback/deletefe/${_id}`).then((response)=>{ 
        alert("deleted successfully");
          feedbackList.map(response.data)
      })
      }
        
     

    return(  //return db data into frontend table
        <div className="container">
            <br></br>
            <h1>Driver feedbacks and complaints</h1><br></br>
            <table class ="table table-hover border shadow">
              <thead class="thead-dark">
                  <tr>
                   
                      <th scope="col">Number</th> 
                      <th scope="col">ID</th>
                      <th scope="col">Username</th> 
                      <th scope="col">Email Address</th>
                      <th scope="col">Type</th>
                      <th scope="col">Contact Number</th> 
                      <th scope="col">Message</th>
                       
                      </tr>
                      </thead>
              <tbody>
            {feedbackList.map((val,key) =>( //mapping data to table 
                <tr>                
                  
                <th scope="row">{key +1}</th>    
                <td>{val._id}</td>
                <td>{val.username}</td>
                <td> {val.email}</td>
                <td>  {val.type}</td>
                <td> {val.contactNumber}</td>
                <td>   {val.message}</td>

                 
                </tr>
            ))}
               </tbody> </table>
                <h3 class="topi" >We would love to hear from you🖤🖤</h3>
               </div>
  
                  
  )

       
  
}