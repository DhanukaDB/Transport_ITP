import React,{useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import {Form, Button} from "react-bootstrap";

function AddVehicle(){

  const [vehicleNo, setvehicleNo] = useState("");
  const [vModel, setvModel] = useState("");
  const [nicNo, setnicNo] = useState("");
  const [ownerName, setownerName] = useState("");
  const [manufacYear, setmanufacYear] = useState("");
  const [vType, setvType] = useState("");

  function sendData(e){
    if(nicNo.trim().length != 10){
      alert("Invalid NIC number!");
      return
      
  }
    e.preventDefault();

    const newVehicle ={

      vehicleNo,
      vModel,
      nicNo,
      ownerName,
      manufacYear,
      vType

    }

    axios.post("http://localhost:5000/vehicle/create",newVehicle).then(()=>{

      alert("Vehicle Added Successfully");
    window.location = `/allvehicle`;


    
      setvehicleNo("");
      setvModel("");
      setnicNo("");
      setownerName("");
      setmanufacYear("");
      setvType("");

    

    }).catch((err=>{

      alert(err)
    }))

   
  }

  return(
    <div>
      <br/>
    <center><h1>Add Vehicle</h1></center>
    <br/>

    <Form onSubmit={sendData}>
  <Form.Group className="container" controlId="vehicleNo">
    <Form.Label>Vehicle Number</Form.Label>
    <Form.Control type="text" required placeholder="Enter Vehicle Number"  maxlength="8" onChange={(e)=>{

      setvehicleNo(e.target.value);

    }}/>
    <Form.Text className="text-muted">
      Enter the Provincial numbers also.. Ex:- WPND1122
    </Form.Text>
  </Form.Group>

  <Form.Group className="container" controlId="vModel">
    <Form.Label>Vehicle Model</Form.Label>
    <Form.Control type="text" required placeholder="Enter Vehicle Number" onChange={(e)=>{

setvModel(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="nicNo">
    <Form.Label>Nic Number</Form.Label>
    <Form.Control type="text" required placeholder="Enter NIC Number"  maxlength="10" onChange={(e)=>{

setnicNo(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="ownerName">
    <Form.Label>Owner Name</Form.Label>
    <Form.Control type="text" required placeholder="Enter Owner Name" onChange={(e)=>{

setownerName(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="manufacYear">
    <Form.Label>Manufactured Year</Form.Label>
    <Form.Control type="text" required placeholder="Enter Manufactured Year" maxlength="8" onChange={(e)=>{

setmanufacYear(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="vType">
    <Form.Label>Vehicle Typer</Form.Label>
    <Form.Control type="text" required placeholder="Enter Vehicle Typer" onChange={(e)=>{

setvType(e.target.value);

}}/>
  </Form.Group>
  


  <Form.Group className="container" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" required label="Vehicle details checked" />

    <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to ="/vhome"> <Button variant="info">Go  Back To Vehicle home</Button></Link>


  </Form.Group>
 
</Form>
</div>
    
  );



}
export default AddVehicle;