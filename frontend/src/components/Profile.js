import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Col,Image} from "react-bootstrap";

function Profile (props){

  const [_id, set_id] = useState("");
  const [username, setUsername] = useState("");
  const [nic, setNic] =useState("");
  const [email,setEmail] = useState("");
  const [phoneno,setPhoneno] = useState("");

  

  useEffect(() =>{
    function getPassenger(){

      const _id = props.match.params._id;
       console.log(_id);
        axios.get("http://localhost:5000/passenger/get"+_id).then((res) =>{

          
          set_id(res.data._id);
           setUsername(res.data.username);
           setNic(res.data.nic);
           setEmail(res.data.email);
           setPhoneno(res.data.phoneno);
           console.log(res.data);

        }).catch((err) => {
            alert(err.message);
        })
 }
    getPassenger();
   },[])

   

  return(
 
    <div>
            <Form >
        <div className = "mycard">
            
           <div className= "card auth-card">

               <div >
           <Col xs={1} md={12}  >
               
      <Image className="im" src="https://res.cloudinary.com/hidl3r/image/upload/v1631475740/itp/pngwing.com_ktdfmg.png" roundedCircle />
    </Col>
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
  

export default Profile;
  

