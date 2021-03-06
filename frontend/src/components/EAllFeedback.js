import React, {useState, useEffect} from 'react';
import axios from "axios";  //send our form data to the mock server
 
 

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
          SetFeedbackList(response.data);
        });
      }, []);

     
        
     

    return(  //return db data into frontend table
      <div className="container">

<blockquote class="blockquote"><br></br>
  <h1 class="mb-0"> Complaints and Feedbacks for our Passengers</h1>

  <footer class="blockquote-footer">thoughts of our Drivers...<cite title="Source Title"> </cite></footer>
</blockquote>

 <br></br><br></br>
        <div className="allEfb">
            
            <table class ="table table-hover border shadow">
              <thead class="thead-dark">
                  <tr>
                   
                      <th scope="col">Number</th> 
                       
                      <th scope="col">Username</th> 
                       
                      <th scope="col">Type</th>
                      
                      <th scope="col">Message</th>
                       
                      </tr>
                      </thead>
              <tbody>
            {feedbackList.map((val,key) =>( //mapping data to table 
                <tr>                
                  
                <th scope="row">{key +1}</th>    
                 
                <td>{val.username}</td>
                 
                <td>  {val.type}</td>
                
                <td>   {val.message}</td>

                 
                </tr>
            ))}
               </tbody> </table>
                </div>
                <h3 class="topi" >We would love to hear from you????????  <a className="btn btn-primary btn-lg" href="/addfe"> Add Feedback</a> {' '}  </h3>
               
                </div>
  
                  
  )

       
  
}