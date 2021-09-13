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

    return (
        <div>
            <Form onSubmit={sendData}>
        <div className = "mycard">
            
           <div className= "card auth-card">

               <div >
               <Col xs={1} md={12}  >
               
               <Image className="im" src="https://res.cloudinary.com/hidl3r/image/upload/v1631475740/itp/pngwing.com_ktdfmg.png" roundedCircle />
             </Col>


           {/*<Col xs={1} md={12}  >       
           <Image className="im" src="ulogin.png" roundedCircle />
            </Col> */} 
               <h1>Sign Up</h1>
          </div>
                 <br/>
               <input 
                type = "text"
                placeholder = "Username"
                id="username"
                value = {username}
                onChange={(e) => setUsername (e.target.value)}
                />

                 <br/>
               <input 
                type = "text"
                placeholder = "Nic"
                id="nic"
                value = {nic}
                onChange={(e) => setNic (e.target.value)}
                />
                <br/>

               <input 
                type = "text"
                placeholder = "Email"
                id="email"
                value = {email}
                onChange={(e) => setEmail (e.target.value)}
                />
                <br/>
                
               <input 
                type = "text"
                placeholder = "Phoneno"
                id="phoneno"
                value = {phoneno}
                onChange={(e) => setPhoneno (e.target.value)}
                />
                <br/>
                <input
                 type ="password"
                 placeholder="Password"
                 id="password"
                 value = {password}
                 onChange={(e) => setPassword (e.target.value)}
                 />
                 <br></br>
                 
                 <Button className= "btn waves-effect waves-light #64b5f6 blue lighten-2" 
                    
                 type="submit">
         
                      Signup
                 </Button>
                 

                 <br></br>
                 <h5>
                     <Link to = "/signin"> Already have an account? </Link>
                 </h5>
           </div>



        </div>
        </Form>
</div>


    
    )
}

export default Signup