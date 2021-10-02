import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';




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

    function Edit(_id) {
      console.log(_id)
      props.history.push("/editvdetails/"+_id);
  }

    function Delete(_id) {
      console.log(_id)
      props.history.push("/vehicledelete/"+_id);
  }

  const createPDF = (_id,vehicleNo,vModel,nicNo,ownerName,manufacYear,vType) =>{
    console.log(_id);
  
const unit = "pt";
const size = "A4"; //page size
const orientation = "landscape";
const marginLeft = 40;
const doc = new jsPDF( orientation , unit , size ); //create document
const title = `| Siyatha - Reservations |- Vehicle ID: ${_id} `;
const vehicleNOs = `Vehicle Number: ${vehicleNo} `;
const vModels = `Vehicle Model: ${vModel} `;
const nicNos = `NIC Number: ${nicNo} `;
const ownerNames = `Owner's Name: ${ownerName} `;
const manufacYears=`Manufatured year :  ${manufacYear}`;
const vTypes=`Vehicle Type :  ${vType}`;
const image =  "https://res.cloudinary.com/hidl3r/image/upload/v1633023488/itp/red_travel_bus_clip_art_12881_tfuz8f.jpg"; 
const back ="https://res.cloudinary.com/hidl3r/image/upload/v1633023476/itp/traveling_bus_icon_classical_flat_design_6840690_c5ttaf.jpg";
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
doc.text(60, 200, vehicleNOs);  
doc.text(60, 250, vModels);  
doc.text(60, 300, nicNos);  
doc.text(60, 350, ownerNames);  
doc.text(60, 400, manufacYears); 
doc.text(60, 450, vTypes); 
doc.addImage(image, 'PNG', left, top, imgWidth, imgHeight);
doc.addImage(back, 'PNG', lefts, tops, imgWidths, imgHeights);
   doc.save (`Vehicle${nicNo}.pdf`)
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
          
          <Form.Control type="text" readonly="readonly" value = {vehicleNo} placeholder="Enter Vehicle Number" onChange={(e)=>{
      
            setvehicleNo(e.target.value);
      
          }}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="container" controlId="vModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {vModel} placeholder="Enter Vehicle Number" onChange={(e)=>{
      
      setvModel(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="nicNo">
          <Form.Label>Nic Number</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {nicNo} placeholder="Enter NIC Number" onChange={(e)=>{
      
      setnicNo(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="ownerName">
          <Form.Label>Owner Name</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {ownerName} placeholder="Enter Owner Name" onChange={(e)=>{
      
      setownerName(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="manufacYear">
          <Form.Label>Manufactured Year</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {manufacYear} placeholder="Enter Manufactured Year" onChange={(e)=>{
      
      setmanufacYear(e.target.value);
      
      }}/>
        </Form.Group>
      
        <Form.Group className="container" controlId="vType">
          <Form.Label>Vehicle Typer</Form.Label>
          <Form.Control type="text" readonly="readonly" value = {vType} placeholder="Enter Vehicle Typer" onChange={(e)=>{
      
      setvType(e.target.value);
      
      }}/>
        </Form.Group>
        
      
      
        <Form.Group className="container" controlId="formBasicCheckbox">
         
      
          <Button variant="outline-warning" onClick={()=>Edit(_id)}> Edit Details</Button>{' '}
          
          <Button variant="outline-danger" onClick={()=>Delete(_id)}>Delete Details</Button>{' '}
         
          <Button variant="outline-dark" onClick = {()=>createPDF(_id,vehicleNo,vModel,nicNo,ownerName,manufacYear,vType)} >Generate PDF</Button>
          <Link to ="/vhome"> <Button variant="info">Go  Back To Vehicle home</Button></Link>
        </Form.Group>
       
      </Form>

      

      </div>
    )
}
export default VehicleDetails;