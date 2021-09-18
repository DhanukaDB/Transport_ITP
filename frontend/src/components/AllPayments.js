import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {container, row, ListGroup} from 'react-bootstrap';
import { Button,Modal,Form } from 'react-bootstrap';

export default function AllPayment(){
    const[Values, setValues] = useState([]);
   
    const[name, setName] = useState("");
    const[address, setAddress] = useState("");
    const[city, setCity] = useState("");
    const[postalcode, setCode] = useState("");
    const[phonenum, setNumber] = useState("");

    const [payments, setPayments] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
      function getPayments(){
          axios.get("http://localhost:5000/payment/",).then((res)=>{
              setPayments(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getPayments();
    },[])
    
    const deletepayment = (id) =>{
        axios.delete(`http://localhost:5000/payment/delete/${id}`);
    }


    const UpdatePaymentDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    

    function sendData(e) {
       
        e.preventDefault();
       

        var name1=null;
        var address1=null;
        var city1=null;
        var postalcode1=null;
        var phonenum1=null;



        if (name===""){
            console.log('test null cond')
           // setName(Values.name)
            name1=Values.name;
        }else{
            //setName(name)
            name1=name
            console.log('test not null cond')

        }
        if (address===""){
            //setAddress(Values.address)
            address1=Values.address
        }else{
            //setAddress(address)
            address1=address
        }
        if (city===""){
            //setCity(Values.city)
            city1=Values.city

        }else{
           // setCity(city)
           city1=city
        }
        if (postalcode===""){
           // setCode(Values.postalcode)
            postalcode1=Values.postalcode
        }else{
            //setCode(postalcode)
            postalcode1=postalcode
        }
        if (phonenum===""){
            //setNumber(Values.phonenum)
            phonenum1=Values.phonenum
        }else{
            //setNumber(phonenum)
            phonenum1=phonenum
        }

        const updatePayment={
            id:Values._id,
            name:name1,
            address:address1,
            city:city1,
            postalcode:postalcode1,
            phonenum:phonenum1
        }

        console.log('form submit payload =====',updatePayment)


        axios.put(`http://localhost:5000/payment/update/${updatePayment.id}`, updatePayment).then(()=>{
            alert("Payment Details Updated");
            handleClose();
            window.location = `/all`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    
     

    return(
        <div>
            <h1>All Payments</h1>
            
        {payments.map((val,key)=>{
            return(
             <div key={key} className="payments">
                 <container length="100px">
                      <row>    
                 <ListGroup>
                 <ListGroup.Item>{val._id}</ListGroup.Item>
                 <ListGroup.Item>{val.name}</ListGroup.Item>
                 <ListGroup.Item>{val.address}</ListGroup.Item>
                 <ListGroup.Item>{val.city}</ListGroup.Item>
                 <ListGroup.Item>{val.postalcode}</ListGroup.Item>
                 <ListGroup.Item>{val.phonenum}</ListGroup.Item>
                 
                 
                 <Button variant="primary" onClick={()=> UpdatePaymentDeatails(val)} className="uppay">
      Update
      </Button>
                 
                 <Button className="delpay" onClick={()=> deletepayment(val._id)}> Delete</Button>
              
                 </ListGroup>
                
                 </row>

                 <Modal show={show} onHide={handleClose} className="getfunc">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
         

         <Form.Group controlId="container">
           <Form.Label for="name">Name</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.name}
           onChange={(e)=>{
            setName(e.target.value);
          }} required/>
         </Form.Group>
         <Form.Group controlId="container">
    <Form.Label for="address">Address</Form.Label>
    <Form.Control type="text" 
    defaultValue={Values.address} 
    onChange={(e)=>{
        setAddress(e.target.value);
      }} required/>
    </Form.Group>

    <Form.Group controlId="container">
    <Form.Label for="city">City</Form.Label>
    <Form.Control type="text"  
    defaultValue={Values.city}
    onChange={(e)=>{
        setCity(e.target.value);
      }} required/>
    </Form.Group>

    <Form.Group controlId="container">
    <Form.Label for="postalcode">Postal Code</Form.Label>
    <Form.Control type="text" 
    defaultValue={Values.postalcode}
    onChange={(e)=>{
        setCode(e.target.value);
      }} required/>
    </Form.Group>

  <Form.Group>
    <Form.Label for="phonenum">Phone Number</Form.Label>
    <Form.Control type="text" 
    defaultValue={Values.phonenum}
    onChange={(e)=>{
        setNumber(e.target.value);
      }} required/>
  </Form.Group>
      
         
         <Button  className="finalpay" type="submit"> Edit details</Button>
         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                 </container>
            </div>
            );
        })}
        </div>
    );
}

