import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button,Modal,Form,Table } from 'react-bootstrap';
 
import jsPDF from 'jspdf';
 


export default function AllEmployeeFeedback(){
    
    //creating states
    const[Values, setValues] = useState([]);
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

    //read feedbacks by admin
    useEffect(()=>{
      function getFeedbacks(){
          axios.get("http://localhost:5000/empFeedback/readfe/",).then((res)=>{
              setFeedbacks(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getFeedbacks();
    },[])
    
   
  //update feedbacks by admin

    const UpdateFeedbackDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    
            
    function sendData(e) {
       
        e.preventDefault();
       

        var username1=null;
        var email1=null;
        var type1=null;
        var contactNumber1= null;
        var message1= null;
      



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


        axios.put(`http://localhost:5000/empFeedback/updatefe/${updateFeedback.id}`, updateFeedback).then(()=>{
            alert("Feedback Details Updated");
            handleClose();
            window.location = `/updatefe`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

           //delete feedback  by admin

    const onDelete = (_id) => {  
        const r = window.confirm ("Delete this feedback?"); 
            if(r ==true){
        axios.delete(`http://localhost:5000/empFeedback/deletefe/${_id}`).then((response)=>{ 
        alert("feedback deleted successfully");
        window.location = `/updatefe`;
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
    const title = `| Siyatha - Feedbacks |- Feedback ID: ${_id} `;
    const Eusername = `Username: ${username} `;
    const Eemail = `Email: ${email} `;
    const Etype = `Type: ${type} `;
    const EcontactNumber = `contact Number: ${contactNumber} `;
    const Emessage = `Message: ${message} `;
     
     const left = 30;
    const top = 8;
    const imgWidth = 100;
    const imgHeight = 100;   
    const lefts = 500;
    const tops = 300;
    const imgWidths = 300;
    const imgHeights = 300;
    doc.setFontSize( 20 );
    doc.text (150, 40,title);
    doc.text(60, 200, Eusername);  
    doc.text(60, 250, Eemail);  
    doc.text(60, 300, Etype);  
    doc.text(60, 350, EcontactNumber);  
    doc.text(60, 400, Emessage); 
     
      doc.save (`Feedback-by-${username}.pdf`) //save the pdf
    }
    


    return (
   <div> 
        <br></br>
           
        <blockquote class="blockquote"> 
   <h1 class="mb-0">Complaints and Feedbacks for Passengers</h1>
   <footer class="blockquote-footer">thoughts of our Drivers...<cite title="Source Title"> </cite></footer>
 </blockquote>


      <div className="App">
            Search <input type="text" placeholder="Search here by email" onChange={e =>{setSearch(e.target.value) }} />
          <br></br><br></br>

 
         <div className="adminAllEfb">
<table class ="table table-hover border shadow">
<thead class="thead-dark">
<tr>
<th>ID</th>
<th>Username</th>
<th>Email</th>
<th> Type</th>
<th>Contact Number</th>
<th>Message</th>
<th> </th>
</tr>
</thead>
<tbody>
{feedbacks.filter(Feedbacks => {     
              if(search === ""){
                  return Feedbacks
              }
              else if(Feedbacks.email.toLowerCase().includes(search.toLowerCase())){ //search by email
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
            <Button variant="warning" onClick={()=> UpdateFeedbackDeatails(Feedbacks)} >Update </Button>

     <a className="btn btn-danger  " onClick={() => onDelete(Feedbacks._id)} href="/updatefe">Delete</a> {' '}  
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
         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                
                 
                 <a className="btn btn-info "   href="/feedbackhandler">Back</a> {' '}  
      
                

 </div> </div>
  );
     
  



}