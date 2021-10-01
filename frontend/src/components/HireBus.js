import React,{useState} from "react";
import axios from "axios";
import {Form,Button, Image,Container,Col,Row} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

function Hirebus() {
  const [name, setname] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [from, setfrom] = useState("");
  const [to1, setto1] = useState("");
  const [date, setdate] = useState("");
  const [questions, setquestions] = useState("");

  function sendData(e){

    e.preventDefault();

    const nerHirebus ={

      name,
      mobileNumber,
      from,
      to1,
      date,
      questions

    }

    axios.post("http://localhost:5000//create",nerHirebus).then(()=>{

      alert("Hire requested Successfully");
    window.location = `/allhirebus`;


    
    setname("");
    setmobileNumber("");
    setfrom("");
    setto1("");
    setdate("");
    setquestions("");

    

    }).catch((err=>{

      alert(err)
    }))
    
  }
  
    return (
      <div>
        <br/><br/>
      <center>  <h1> Hirebus </h1> </center>
      <br/>
    
      <Container>
  <Row>
    <Col sm={8}>

    <Form onSubmit={sendData}>

<Form.Group className="container" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  placeholder="Enter Vehicle Number" onChange={(e)=>{

      setname(e.target.value);

    }}/>
    <Form.Text className="text-muted">
      Enter the Name
    </Form.Text>
  </Form.Group>
  <br/>
  <Form.Group className="container" controlId="mobileNumber">
    <Form.Label>phone No</Form.Label>
    <Form.Control type="tel" placeholder="Enter Vehicle Number" onChange={(e)=>{

setmobileNumber(e.target.value);

}}/>
  </Form.Group>
  <br/>
  <Form.Group className="container" controlId="from">
    <Form.Label>Nic Number</Form.Label>
    <Form.Control type="text" placeholder="Enter NIC Number" onChange={(e)=>{

setfrom(e.target.value);

}}/>
  </Form.Group>
  <br/>
  <Form.Group className="container" controlId="to1">
    <Form.Label>Owner Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Owner Name" onChange={(e)=>{

setto1(e.target.value);

}}/>
  </Form.Group>
  <br/>
  <Form.Group className="container" controlId="date">
    <Form.Label>date</Form.Label>
    <Form.Control type="date" placeholder="Enter Manufactured Year" onChange={(e)=>{

setdate(e.target.value);

}}/>
  </Form.Group>
  <br/>
  <Form.Group className="container" controlId="questions">
    <Form.Label>Vehicle Typer</Form.Label>
    <Form.Control type="text" placeholder="Enter Vehicle Typer" onChange={(e)=>{

setquestions(e.target.value);

}}/>
  </Form.Group>
  
  <br/>

  <Form.Group className="container" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />

    <br/><br/>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
 
</Form>
    </Col>


    <Col sm={4}>

<br/><br/><br/><br/><br/><br/><br/>
    <Carousel>
  <Carousel.Item>
    <center>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633034520/itp/Walking_gumi2l.gif"
     
    />
    </center>
    
  </Carousel.Item>
 
</Carousel>
    </Col>
  </Row>

</Container>

      <br/><br/>

    

</div>

    );
  }
  
  export default Hirebus;




 