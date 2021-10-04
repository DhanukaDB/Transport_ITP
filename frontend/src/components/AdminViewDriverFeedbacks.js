import React, {useState, useEffect} from 'react';
import axios from "axios";  //send our form data to the mock server
 
 
 
 
export default function AdminAllEmpFeedbacks(){   

    //creating states
    const[feedbackList,SetFeedbackList] = useState([]);

    const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState("");
 

  // admin view all the feedbacks entered by drivers
    useEffect(() =>{  
        axios.get(`http://localhost:8070/empFeedback/readfeadmin`).then((response) => { //pass response as a function
          SetFeedbackList(response.data);
        });
      }, 
      []);

            

    return(
      <div className="container"> 
         
          <br></br>

          <blockquote class="blockquote">
  <h1 class="mb-0"> Complaints and Feedbacks for Passengers</h1>
  <footer class="blockquote-footer">thoughts of our Drivers...<cite title="Source Title"> </cite></footer>
</blockquote>

 <br></br><br></br>
 <div class="adminAllEfb"> 
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
                      <th scope="col"></th>
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

                <td>
                 
                
                 
                
                </td>
                </tr>
            ))}
               </tbody> </table></div></div> 
  )

 
  
}