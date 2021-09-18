import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import 'react-confirm-alert/src/react-confirm-alert.css'; 

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
  
      axios.delete("http://localhost:5000/vehicle/delete/"+_id,newVehicle).then(()=>{
  
        alert("Vehicle Deleted Successfully");
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

<center><h1>Vehicle Details</h1></center>

        <Form onSubmit={sendData}>

        <Form.Group className="container" controlId="vModel">
          <Form.Label>Vehicle ID</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {_id} placeholder="" />

        </Form.Group>

        <Form.Group className="container" controlId="vehicleNo">
          <Form.Label>Vehicle Number</Form.Label>
          
          <Form.Control type="text"  readonly="readonly" value = {vehicleNo} placeholder="Enter Vehicle Number" onChange={(e)=>{
      
           
      
          }}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
    
      
      
        <Form.Group className="container" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"  value = {manufacYear} label="Check me out" />
      
          <Button type="submit" variant="danger">Confirm Delete </Button>{' '}
          <Link to ="/vhome"> <Button variant="info">Go  Back To Vehicle home</Button></Link>
         
        </Form.Group>
      
       
      </Form>

      

      </div>
    )
}
export default VehicleDetails;