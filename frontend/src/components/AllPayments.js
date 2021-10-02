import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {container, row, ListGroup} from 'react-bootstrap';
import { Button,Modal,Form, InputGroup, FormControl } from 'react-bootstrap';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getPayments(){
          axios.get("http://localhost:3005/payment/",).then((res)=>{
              setPayments(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getPayments();
    },[])
    
    const deletepayment = (id) =>{
        axios.delete(`http://localhost:3005/payment/delete/${id}`);
    }


    const UpdatePaymentDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    
    const createPDF = (_id, name, address, city, postalcode, phonenum)=>{
        console.log(_id);
        console.log(name);
        console.log(address);
        console.log(city);
        console.log(postalcode);
        console.log(phonenum);

        const unit = "pt";
        const size = "A4";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = `Siyatha Payments        ID- ${_id}`;
        const paymentName = `Payee Name: ${name}`;
        const paymentAddress = `Payee Address: ${address}, ${city}`;
        const paymentCode = `Postal Code: ${postalcode}`;
        const paymentNumber = `Phone Number: ${phonenum}`;
        const image1 = "https://res.cloudinary.com/dbw0cho6v/image/upload/v1633115457/Siyatha/depositphotos_403895126-stock-illustration-isometric-online-payments-online-payment_lvsqn9.jpg"
        const image2 = "https://res.cloudinary.com/dbw0cho6v/image/upload/v1633115435/Siyatha/GettyImages-1154092756-e31f198466e443018b44a088ead1250b_yfga2y.jpg"
        const success = `The payment was successful and assured by Siyatha`;
        const left = 20;
        const top = 8;
        const imgWidth = 150;
        const imgHeight = 100;
        const lefts = 450;
        const tops = 300;
        const imgWidths = 350;
        const imgHeights = 250;
        doc.setFontSize(20);
        doc.text(200,40 ,title);
        doc.text(60,200, paymentName );
        doc.text(60,250, paymentAddress);
        doc.text(60, 300, paymentCode);
        doc.text(60, 350, paymentNumber);
        doc.addImage(image1, 'PNG', left, top ,imgWidth, imgHeight);
        doc.addImage(image2, 'PNG' , lefts, tops, imgWidths, imgHeights);
        doc.text(60, 575, success);
        
        doc.save(`${name}'s Payment.pdf`);
     
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


        axios.put(`http://localhost:3005/payment/update/${updatePayment.id}`, updatePayment).then(()=>{
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

            <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default" onChange={(e) =>{
          setSearch(e.target.value);
      }}
    />
  </InputGroup>

  {payments.filter(Payment =>{
      if(search === ""){
          return Payment
      }
      else if(Payment.name.toLowerCase().includes(search.toLowerCase())){
          return Payment
      }
  })
            
    .map((val,key)=>{
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
                 <Button className="generatePdF" onClick={()=> createPDF(val._id, val.name, val.address, val.city, val.postalcode, val.phonenum)}>Generate report</Button>
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

