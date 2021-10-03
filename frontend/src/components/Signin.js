import React from "react";
import {Link,useHistory} from  'react-router-dom'
import { useState} from 'react';
import axois from "axios";
import {Col,Image,Form,Button} from "react-bootstrap";

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
     return(
       <div>
         
         <Form className="container" onSubmit={sendData} >
         <div className = "signin1">
           <div className= "signin">
         <Col xs={1} md={12}  >
               <Image  className="im" src="https://res.cloudinary.com/hidl3r/image/upload/v1631611510/itp/ulogin_b64etx.png" roundedCircle />
               
             </Col>

               <h1 className="login">Sign In</h1>
                
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"  value = {email}
                       onChange={(e) => setEmail (e.target.value)} />
    
                    </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" value = {password}
                 onChange={(e) => setPassword (e.target.value)}/>
              </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
      <Button variant="primary" type="submit">
          Sign In
     </Button>
      <br/>
      <h5>
      <Link to = "/signup" id="link"> Don't have an account? </Link>
     </h5>

              </div>
          </div>
        </Form>
     </div>
  )  
}

export default Signin
