import React from "react";
import {Link,useHistory} from  'react-router-dom'
import { useState} from 'react';
import axois from "axios";
import {Form,Button} from "react-bootstrap";

const Signin = (props) => {

    const history = useHistory()
   
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username] = useState("")
    const [nic] = useState("") 
    const [phoneno] = useState("")
    
    function sendData(e) {
         if(!email || !password){
                alert("Please add email or password");
                return
         }
        else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                alert("Invalid email");
             return
         }

        e.preventDefault();
        
        const newPassenger ={
            username,
            nic,
            email,
            phoneno,
            password
        }
         console.log(newPassenger)  
           // alert("Success");

         axois.post("http://localhost:5000/passenger/signin", newPassenger).then(() => {
             alert("Sign in successfully")

             history.push('/')
             //window.location='/profile/+{email}'

         }).catch((err) =>{
             
            alert("Invalid email or password")
         })
        
    }
       
    

    return (
        <div>
        <form className="container" onSubmit={sendData}>
        <div className = "mycard">
           <div className= "card auth-card">
               <h2>Sign In</h2>
                
               <input 
                type = "text"
                placeholder = "Email"
                id="email"
                value = {email}
                onChange={(e) => setEmail (e.target.value)}
                />
                <br></br>

                <input
                 type ="password"
                 placeholder="Password"
                 id="password"
                 value = {password}
                 onChange={(e) => setPassword (e.target.value)}
                 />
                <br></br>

                 <button className = "btn waves-effect waves-light #64b5f6 blue lighten-2">
                      Signin
                 </button>
                 
                 <br></br>
                 <h5>
                     <Link to = "/signup"> Don't have an account? </Link>
                 </h5>

           </div>


        </div>
      </form>
      </div>  
    )
}

export default Signin