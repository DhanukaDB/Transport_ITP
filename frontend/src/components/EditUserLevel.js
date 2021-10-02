import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-router-dom";
import {Button ,Image,Form} from "react-bootstrap";


function EditUserLevel (props) {
    
    const [_id, set_id] = useState("");
    const [username, setUsername] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [userlevel, setUserlevel] = useState("");

    const [passengers, setPassengers] = useState([]); 

    useEffect(() =>{
        function getPassenger(){

            const _id =props.match.params.id;
            console.log(_id);
            axios.get("http://localhost:5000/passenger/get/"+_id).then((res) =>{

               setPassengers(res.data);
                set_id(res.data._id);
                setUsername(res.data.username);
                setNic(res.data.nic);
                setEmail(res.data.email);
                setPhoneno(res.data.phoneno);
                setUserlevel(res.data.userlevel);

               console.log(res.data);
               console.log(res.data.username);
            }).catch((err) => {
                alert(err.message);
            })
     }
        getPassenger();
       },[])

    

   
        
       function SendUpdateUserLevel(e){
         e.preventDefault();
  
    
        const newPassenger = {
            _id,
            username,
            nic,
            email,
            phoneno,
            userlevel

     }
                axios.put("http://localhost:5000/passenger/update/"+_id,newPassenger).then(() =>{
                      alert("successfully updated"); 
                       window.location = `/`;
                

                       setUsername("");
                       setNic("");
                       setEmail("");
                       setPhoneno("");
                       setUserlevel("")
                    
      
        }).catch((err) =>{
            console.log(err);
            alert(err);
        })
    
    }


   return (
   <div>
          
        <Form onSubmit={SendUpdateUserLevel}>

<Form.Group className="container" controlId="_id">
  <Form.Label>Passenger ID</Form.Label>
  <Form.Control type="text" readonly="readonly" value = {_id} placeholder="" />

</Form.Group>

<Form.Group className="container" controlId="username">
  <Form.Label>Username</Form.Label>
  
  <Form.Control type="text"  value = {username} placeholder="Enter UserName" onChange={(e)=>{

    setUsername(e.target.value);

  }}/>
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>

<Form.Group className="container" controlId="nic">
  <Form.Label>NIC</Form.Label>
  <Form.Control type="text"  value = {nic} placeholder="Enter NIC" onChange={(e)=>{

setNic(e.target.value);

}}/>
</Form.Group>

<Form.Group className="container" controlId="email">
  <Form.Label>Email</Form.Label>
  <Form.Control type="text"  value = {email} placeholder="Enter Email" onChange={(e)=>{

setEmail(e.target.value);

}}/>
</Form.Group>

<Form.Group className="container" controlId="phone">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control type="text"  value = {phoneno} placeholder="Enter Owner Name" onChange={(e)=>{

setPhoneno(e.target.value);

}}/>
</Form.Group>





<Form.Group className="container" controlId="formBasicCheckbox">
 

  <Button type="submit" variant="outline-warning">Confirm Edit Details</Button>{' '}
  
</Form.Group>

</Form>



   </div>
       

   )


}

export default EditUserLevel;