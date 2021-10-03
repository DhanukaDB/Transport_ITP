import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {Col,Image} from "react-bootstrap";
import { useState} from 'react';
import axois from "axios";
import{Form,Button} from "react-bootstrap";


const Signup = () => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [nic, setNic] =useState("")
    const [email,setEmail] = useState("")
    const [phoneno,setPhoneno] = useState("")
    const [password, setPassword] = useState("")
    const [userlevel, setUserlevel] = useState("0")
    function sendData(e) {
        if(!username || !nic || !email || !phoneno || !password){
            alert("Please fill  in all  fields");
            return
        } 

        
        else  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Invalid email");
             return
         }

        else if(phoneno.trim().length !=10){
            alert("Invalid phoneno");
            return
        }

        e.preventDefault();
        
        const newPassenger ={
            username,
            nic,
            email,
            phoneno,
            password,
            userlevel
        }
         console.log(newPassenger)  
         //alert("Success");


         axois.post("http://localhost:5000/passenger/add", newPassenger).then(() => {
             alert("Registration Success")
             history.push('/signin')

         }).catch((err) =>{
             alert(err)
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
 
                <h1 className="login">Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                     <Form.Control type="text" placeholder="Enter Username"  value = {username}
                        onChange={(e) => setUsername (e.target.value)} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicNic">
                     <Form.Control type="text" placeholder="Enter Nic"  value = {nic}
                        onChange={(e) => setNic (e.target.value)} />
     
               </Form.Group>

                
                 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Control type="email" placeholder="Enter email"  value = {email}
                        onChange={(e) => setEmail (e.target.value)} />
     
                </Form.Group>


               <Form.Group className="mb-3" controlId="formBasicPhoneno">
                     <Form.Control type="Number" placeholder="Enter Phone number"  value = {phoneno}
                        onChange={(e) => setPhoneno (e.target.value)} />
     
                     </Form.Group>
 
               <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control type="password" placeholder="Password" value = {password}
                  onChange={(e) => setPassword (e.target.value)}/>
               </Form.Group>
 
              <br/><br/>
       <Button variant="primary" type="submit">
           Sign Up
      </Button>
      <br/><br/>
       <h5>
       <Link to = "/signin">Already have an account?  </Link>
      </h5>
 
               </div>
           </div>
         </Form>
      </div>
   )  
 
}

export default Signup