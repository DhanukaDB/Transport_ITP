import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {Col,Image} from "react-bootstrap";
import { useState} from 'react';
import axois from "axios";



const Signup = () => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [nic, setNic] =useState("")
    const [email,setEmail] = useState("")
    const [phoneno,setPhoneno] = useState("")
    const [password, setPassword] = useState("")
    
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


         axois.post("http://localhost:5000/passenger/add", newPassenger).then(() => {
             alert("Student Added")
             history.push('/signin')

         }).catch((err) =>{
             alert(err)
         })
    }

    return (
        <div>
            <form onSubmit={sendData}>
        <div className = "mycard">
            
           <div className= "card auth-card">

               <div >
           <Col xs={1} md={12}  >
               
      <Image className="im" src="ulogin.png" roundedCircle />
    </Col>
               <h1>Sign Up</h1>
</div>
                 
               <input 
                type = "text"
                placeholder = "User name"
                id="username"
                value = {username}
                onChange={(e) => setUsername (e.target.value)}
                />

                 
               <input 
                type = "text"
                placeholder = "Nic"
                id="nic"
                value = {nic}
                onChange={(e) => setNic (e.target.value)}
                />


               <input 
                type = "text"
                placeholder = "Email"
                id="email"
                value = {email}
                onChange={(e) => setEmail (e.target.value)}
                />
                
                
               <input 
                type = "text"
                placeholder = "Phoneno"
                id="phoneno"
                value = {phoneno}
                onChange={(e) => setPhoneno (e.target.value)}
                />

                <input
                 type ="password"
                 placeholder="Password"
                 id="password"
                 value = {password}
                 onChange={(e) => setPassword (e.target.value)}
                 />
                 <br></br>
                 
                 <button className= "btn waves-effect waves-light #64b5f6 blue lighten-2" 
                    
                 type="submit">
         
                      Signup
                 </button>
                 

                 <br></br>
                 <h5>
                     <Link to = "/signin"> Already have an account? </Link>
                 </h5>
           </div>



        </div>
        </form>
</div>


    
    )
}

export default Signup