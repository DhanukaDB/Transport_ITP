import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button,Modal,Form,Table } from 'react-bootstrap';
import jsPDF from 'jspdf';
 
export default function AllPassengerFeedback(){
    const[Values, setValues] = useState([]);

    const[_id, setId] = useState("");
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[type, setType] = useState("");
    const[contactNumber, setContactNumber] = useState("");
    const[message, setMessage] = useState("");
     
    const [feedbacks, setFeedbacks] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getFeedbacks(){
          axios.get("http://localhost:5000/feedback/readf/",).then((res)=>{
              setFeedbacks(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getFeedbacks();
    },[])
    
   


    const UpdateFeedbackDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    

    function sendData(e) {
       
        e.preventDefault();
       
        var id=null;
        var username1=null;
        var email1=null;
        var type1=null;
        var contactNumber1= null;
        var message1= null;
      
        if (_id ===""){
            console.log('test null cond')
           // setId(Values.id)
            id=Values._id;
        }else{
            //setId(id)
            id=_id
            console.log('test not null cond')

        }

        if (username ===""){
            console.log('test null cond')
           // setName(Values.name)
            username1=Values.username;
        }else{
            //setName(name)
            username1=username
            console.log('test not null cond')

        }
        
        if (email===""){
            //setEmail(Values.email)
            email1=Values.email

        }else{
           // setEmail(email)
           email1=email
        }
        if (type===""){
           // setType(Values.type)
             type1=Values.type
        }else{
            //setType(type)
            type1=type
        }

        if (contactNumber===""){
          // setContactNumber(Values.contactNumber)
           contactNumber1=Values.contactNumber
       }else{
           //setContactNumber(contactNumber)
          contactNumber1=contactNumber
       }

        if (message===""){
            //setMessage(Values.message)
            message1=Values.message
        }else{
            //setMessage(message)
            message1=message
        }

        const updateFeedback={
            id:Values._id,
            username:username1,
            email:email1,
            type:type1,
            contactNumber:contactNumber1,
            message:message1
        }

        console.log('form submit   =====',updateFeedback)


        axios.put(`http://localhost:5000/feedback/updatef/${updateFeedback.id}`, updateFeedback).then(()=>{
            alert("Feedback Details Updated");
            handleClose();
            window.location = `/updatef`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }


    //delete feedback
    const onDelete = (_id) => {  

        const r = window.confirm ("Delete this Feedback?"); 
            if(r ==true){
        axios.delete(`http://localhost:5000/Feedback/deletef/${_id}`).then((response)=>{ 
        alert("Feedback deleted successfully");
        window.location = `/readfadmin`;
      })
    }
      }
        
     

      //generate pdf
      const createPDF = (_id,username,email,type,contactNumber,message) =>{

        console.log(_id);
        console.log(username);
        console.log(email);
        console.log(type);
        console.log(contactNumber);
        console.log(message);
    
    const unit = "pt";
    const size = "A4"; //page size
    const orientation = "landscape";
    const marginLeft = 40;
    const doc = new jsPDF( orientation , unit , size ); //create document
    //pdf data
    const title = `Siyatha Travels - ${type} for a Driver `;
    const Eusername = `Username: ${username} `;
    const Etype = `Type: ${type} `;
    const EcontactNumber = `contact Number: ${contactNumber} `;
    const Emessage = `Message: ${message} `;
     
     
    
    doc.setFontSize( 20 );
    doc.text (150, 40,title);
    doc.text(60, 250, Eusername);  
    doc.text(60, 300, Etype);  
    doc.text(60, 350, EcontactNumber);  
    doc.text(60, 400, Emessage); 
     
       doc.save (`Feedback-by-${username}.pdf`)  //save pdf
    }
    



    return (
<div> 
        <br></br>

        <blockquote class="blockquote">
   <h1 class="mb-0">Complaints and Feedbacks for Drivers</h1>
   <footer class="blockquote-footer">thoughts of our Passengers....<cite title="Source Title"> </cite></footer>
 </blockquote>


      <div className="App">
            Search <input type="text" placeholder="Search here by email" onChange={e =>{setSearch(e.target.value) }} />
          <br></br><br></br>

 
         <div className="adminAllEfb">

<table class ="table table-hover border shadow">
<thead class="thead-dark">
<tr>
<th>ID</th>
<th>User Name</th>
<th>Email</th>
<th> Type</th>
<th>contact Number</th>
<th>Message</th>
<th> </th>
</tr>
</thead>
<tbody>
{feedbacks.filter(Feedbacks => {
              if(search === ""){
                  return Feedbacks
              }
              else if(Feedbacks.email.toLowerCase().includes(search.toLowerCase())){
                  return Feedbacks
              }
          }).map(Feedbacks=>{  //map data to table
              return(
                <tr key={Feedbacks._id}>
                <td> {Feedbacks._id} </td>
            <td>{Feedbacks.username}</td>
            <td>{Feedbacks.email}</td>
            <td>{Feedbacks.type}</td>
            <td>{Feedbacks.contactNumber}</td>
            <td>{Feedbacks.message}</td>
            <Button variant="warning" onClick={()=> UpdateFeedbackDeatails(Feedbacks)}  >Update </Button>
            

            <a className="btn btn-danger  " onClick={() => onDelete(Feedbacks._id)} href="/updatef">Delete</a> {' '}  
       
                 
                <Button variant="outline-dark" onClick = {()=>createPDF(Feedbacks._id,Feedbacks.username,Feedbacks.email,Feedbacks.type,Feedbacks.contactNumber,Feedbacks.message)} >Generate PDF</Button>


          </tr>
          
          
          );
         
          })} 

</tbody>
</table></div>

<Modal show={show} onHide={handleClose}  >
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
         

         <Form.Group controlId="container">
           <Form.Label for="name">User Name</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.username}
           onChange={(e)=>{
            setUsername(e.target.value);
          }} readonly="readonly"/>
         </Form.Group>

          

         <Form.Group controlId="container">
          <Form.Label for="email">Email</Form.Label>
          <Form.Control type="text" 
          defaultValue={Values.email}
          onChange={(e)=>{
          setEmail(e.target.value);
          }} readonly="readonly"/>
          </Form.Group>


          <Form.Group controlId="container">
          <Form.Label for="type">Type</Form.Label>
          <Form.Control type="text" 
           defaultValue={Values.type}
           onChange={(e)=>{
           setType(e.target.value);
           }} readonly="readonly"/>
           </Form.Group>

           <Form.Group controlId="container">
          <Form.Label for="contactNumber">contact number</Form.Label>
          <Form.Control type="Number" 
           defaultValue={Values.type}
           onChange={(e)=>{
           setContactNumber(e.target.value);
           }} readonly="readonly"/>
           </Form.Group>

           <Form.Group controlId="container">
           <Form.Label for="message">Message</Form.Label>
           <Form.Control type="text" 
            defaultValue={Values.message}
             onChange={(e)=>{
             setMessage(e.target.value);
            }} />
           </Form.Group>
    
         <Button  type="submit"> Edit details</Button> 
         <Button variant="light"><a href="/updatef">Cancel Edit </a></Button>{' '}


         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                
                   <a className="btn btn-info " href="/feedbackhandler">Back</a> {' '}  
       
 </div></div> 
  );
     
  



}

