import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Form, Button} from "react-bootstrap";




function VehicleDetails (props){

    const [_id, set_id] = useState("");
    const [vehicleNo, setvehicleNo] = useState("");
    const [vModel, setvModel] = useState("");
    const [nicNo, setnicNo] = useState("");
    const [ownerName, setownerName] = useState("");
    const [manufacYear, setmanufacYear] = useState("");
    const [vType, setvType] = useState("");

    const [vehicles, setVehicles] = useState([]);
   
    useEffect(() =>{
        function getVehicles(){

            const _id =props.match.params.id;
            console.log(_id);
            axios.get("http://localhost:5000/vehicle/get/"+_id).then((res) =>{
              
               setVehicles(res.data);
               set_id(res.data._id);
               setvehicleNo(res.data.vehicleNo);
               setvModel(res.data.vModel);
               setnicNo(res.data.nicNo);
               setownerName(res.data.ownerName);
               setmanufacYear(res.data.manufacYear);
               setvType(res.data.vType);
               console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
     }
        getVehicles();
       },[])

      
  
    function sendData(e){
      e.preventDefault();
  
      const newVehicle ={
        _id,
        vehicleNo,
        vModel,
        nicNo,
        ownerName,
        manufacYear,
        vType
  
      }
  
      axios.put("http://localhost:5000/vehicle/update/"+_id,newVehicle).then(()=>{
  
        alert("Vehicle Edited Successfully");
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

    function Delete(_id) {
      console.log(_id)
      props.history.push("/vehicledelete/"+_id);
  }

     
  

    return(
        <div>

<center><h1>Vehicle Details</h1></center>



        <Form onSubmit={sendData}>

        <Form.Group className="container" controlId="vModel">
          <Form.Label>Vehicle ID</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {_id} placeholder="" />

        </Form.Group>

        <Form.Group className="container" controlId="vehicleNo">
          <Form.Label>Vehicle Number</Form.Label>
          
          <Form.Control type="text"  value = {vehicleNo} placeholder="Enter Vehicle Number" onChange={(e)=>{
      
            setvehicleNo(e.target.value);
      
          }}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="container" controlId="vModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control type="text"  value = {vModel} placeholder="Enter Vehicle Number" onChange={(e)=>{
      
      setvModel(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="nicNo">
          <Form.Label>Nic Number</Form.Label>
          <Form.Control type="text"  value = {nicNo} placeholder="Enter NIC Number" onChange={(e)=>{
      
      setnicNo(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="ownerName">
          <Form.Label>Owner Name</Form.Label>
          <Form.Control type="text"  value = {ownerName} placeholder="Enter Owner Name" onChange={(e)=>{
      
      setownerName(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="manufacYear">
          <Form.Label>Manufactured Year</Form.Label>
          <Form.Control type="text"  value = {manufacYear} placeholder="Enter Manufactured Year" onChange={(e)=>{
      
      setmanufacYear(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="vType">
          <Form.Label>Vehicle Typer</Form.Label>
          <Form.Control type="text"  value = {vType} placeholder="Enter Vehicle Typer" onChange={(e)=>{
      
      setvType(e.target.value);
      
      }}/>
        </Form.Group>
        
      
      
        <Form.Group className="container" controlId="formBasicCheckbox">
         
      
          <Button type="submit" variant="outline-warning">Confirm Edit Details</Button>{' '}
          
          <Button variant="outline-danger" onClick={()=>Delete(_id)}>Delete Details</Button>{' '}
          <Link to ="/vhome"> <Button variant="info">Go  Back To Vehicle home</Button></Link>
        </Form.Group>
       
      </Form>

      

      </div>
    )
}
export default VehicleDetails;