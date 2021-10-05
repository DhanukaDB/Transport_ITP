import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {container, row, ListGroup} from 'react-bootstrap';
import { Button,Modal,Form, InputGroup, FormControl } from 'react-bootstrap';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function PassengerReport(){
    const[Values, setValues] = useState([]);
   
    const[username, setUsername] = useState("");
    const[nic, setNic] = useState("");
    const[email, setEmail] = useState("");
    const[phoneno, setPhoneno] = useState("");
    const[userlevel, setUserlevel] = useState("");
    const[userleveldate, setUserleveldate] = useState("");
    const [passengers, setPassengers] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getPassengers(){
          axios.get("http://localhost:5000/passenger/",).then((res)=>{
              setPassengers(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getPassengers();
    },[])
    
    const deletepassenger = (id) =>{
        axios.delete(`http://localhost:5000/passenger/delete/${id}`);
    }


    const UpdatePassengerDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    
    const createPDF = (_id, username, nic, email, phoneno, userlevel, userleveldate)=>{
        console.log(_id);
        console.log(username);
        console.log(nic);
        console.log(email);
        console.log(phoneno);
        console.log(userlevel);
        console.log(userleveldate);

        const unit = "pt";
        const size = "A4";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = `Siyatha Offers       ID- ${_id}`;
        const passengerName = `Username: ${username}`;
        const passengerNic = `NIC: ${nic}`;
        const passengerEmail = `Email: ${email}`;
        const passengerPhoneno = `Phone Number: ${phoneno}`;
        const passengerUserlevel = `User Level: ${userlevel}`;

      
        const image2 = "https://res.cloudinary.com/hidl3r/image/upload/v1633334630/itp/levelup_obcfho.jpg"
        const success = ` Congrats! ${username}. You are now a Level ${userlevel} User`;
        const offerdetails =`Enjoy 50% OFF on your next Ride.`;
        const validduration =`The Validity is one month from the date of the Issuance `;
        const issuedate =`Issue Date: ${userleveldate}`;
        const left = 20;
        const top = 8;
        
        const lefts = 450;
        const tops = 200;
        const imgWidths = 350;
        const imgHeights = 250;
        doc.setFontSize(15);
        doc.text(200,40 ,title);
        doc.text(60,200, passengerName );
        doc.text(60,250, passengerNic);
        doc.text(60, 300, passengerEmail);
        doc.text(60, 350, passengerPhoneno);
       
        doc.addImage(image2, 'PNG' , lefts, tops, imgWidths, imgHeights);
        doc.text(250, 100, success);
        doc.text(300, 120, offerdetails);
        doc.text(250, 140, validduration);

        doc.text(60,400,issuedate);
        doc.save(`${username}'s Userlevel.pdf`);
     
    }

   
    function sendData(e) {
       
      e.preventDefault();
     

      var username1=null;
      var nic1=null;
      var email1=null;
      var phoneno1=null;
      var userlevel1= null;
      var userleveldate1 = null;

  //set values

      if (username ===""){
          console.log('test null cond')
          username1=Values.username;
        }else{
          username1=username
          console.log('test not null cond')

      }
      if (nic ===""){
          nic1=Values.nic
        }else{
          nic1=nic
      }

      if (email===""){
          email1=Values.email

        }else{
         email1=email
      }

      if (phoneno===""){
          phoneno1=Values.phoneno
        }else{  
          phoneno1=phoneno
      }


      if (userlevel===""){
          userlevel1=Values.userlevel
         }else{
          userlevel1=userlevel
      }

      if (userleveldate===""){
        userleveldate1 =Values.userleveldate
       }else{
        userleveldate1 = userleveldate
    }

      const updatePassenger={
          id:Values._id,
          username:username1,
          nic:nic1,
          email:email1,
          phoneno:phoneno1,
          userlevel:userlevel1
      }

      console.log('form submit =====',updatePassenger)


      axios.put(`http://localhost:5000/passenger/update/${updatePassenger.id}`, updatePassenger).then(()=>{
          alert("Passenger Details Updated");
          handleClose();
          window.location = `/userlevel`;
          
      }).catch((err)=>{
          console.log(err);
          alert(err);
      })
  }



    return(
        <div>
            <h1>Offer</h1>

            <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default" onChange={(e) =>{
          setSearch(e.target.value);
      }}
    />
  </InputGroup>

  {passengers.filter(Passenger=>{
      if(search === ""){
          return Passenger
      }
      else if(Passenger.name.toLowerCase().includes(search.toLowerCase())){
          return Passenger
      }
  })
            
    .map((val,key)=>{
            return(
             <div key={key} className="passengers">
                 <container length="100px">
                      <row>    
                 <ListGroup>
                 <ListGroup.Item>{val._id}</ListGroup.Item>
                 <ListGroup.Item>{val.username}</ListGroup.Item>
                 <ListGroup.Item>{val.nic}</ListGroup.Item>
                 <ListGroup.Item>{val.email}</ListGroup.Item>
                 <ListGroup.Item>{val.phoneno}</ListGroup.Item>
                 <ListGroup.Item>{val.userlevel}</ListGroup.Item>
                 
                 
                 <Button className="generateOfferPdF" onClick={()=> createPDF(val._id, val.username, val.nic, val.email, val.phoneno, val.userlevel, val.userleveldate )}>Generate report</Button>
                 </ListGroup>
                
                 </row>

                 <Modal show={show} onHide={handleClose} className="getfunc">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
         

         <Form.Group controlId="container">
           <Form.Label for="username">Username</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.username}
           onChange={(e)=>{
            setUsername(e.target.value);
          }} />

         </Form.Group>
         <Form.Group controlId="container">
         <Form.Label for="nic">NIC</Form.Label>
         <Form.Control type="text" 
         defaultValue={Values.nic} 
         onChange={(e)=>{
           setNic(e.target.value);
         }} required />
        </Form.Group>

        <Form.Group controlId="container">
        <Form.Label for="email">Email</Form.Label>
        <Form.Control type="text"  
         defaultValue={Values.email}
         onChange={(e)=>{
        setEmail(e.target.value);
        }} required/>
        </Form.Group>

        <Form.Group controlId="container">
        <Form.Label for="phoneno">Phone number</Form.Label>
        <Form.Control type="Number" 
        defaultValue={Values.phoneno}
        onChange={(e)=>{
        setPhoneno(e.target.value);
        }} required/>
        </Form.Group>

      <Form.Group>
        <Form.Label for="userlevel">User Level</Form.Label>
        <Form.Control type="text" 
        defaultValue={Values.userlevel}
        onChange={(e)=>{
        setUserlevel(e.target.value);
        }} />
       </Form.Group>
      
         
      <Button  className="final" type="submit"> Edit details</Button>
      </Form>

         </Modal.Body>
        
         </Modal>
           <br />
       </container>
     </div>
            );
        })}


            <Button variant="secondary" size="lg"><a href="/userhandler"> Back </a></Button>{' '}

 </div>
    );
}
