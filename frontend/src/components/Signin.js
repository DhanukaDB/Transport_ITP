import React from "react";
import {Link,useHistory} from  'react-router-dom'
import { useState} from 'react';
import axois from "axios";
const Signin = (props) => {

    const history = useHistory()
   
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username] = useState("")
    const [nic] = useState("") 
    const [phoneno] = useState("")
    
    function sendData(e) {
         if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
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
         alert("Success");


         axois.post("http://localhost:5000/passenger/signin", newPassenger).then(() => {
             alert("Sign in successfully")
           window.location ='/profile/+{email}'
           //  history.push('/')

         }).catch((err) =>{
             
             alert(err)
         })

    }
       
    function edit({email}) {
        console.log({email})
        props.history.push("/profile/"+{email});
    }

    return (
        <div>
        <form onSubmit={sendData}>
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


                <input
                 type ="password"
                 placeholder="Password"
                 id="password"
                 value = {password}
                 onChange={(e) => setPassword (e.target.value)}
                 />
                <br></br>
                 <button onClick={()=>edit(email)} className = "btn waves-effect waves-light #64b5f6 blue lighten-2">
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