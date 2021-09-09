import React, {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";



function AllVehicle(){

   const [vehicles, setVehicles] = useState([]);

   useEffect(() =>{
    function getVehicles(){
        axios.get("http://localhost:5000/vehicle/").then((res) =>{
           setVehicles(res.data);
        }).catch((err) => {
            alert(err.message);
        })
 }
    getVehicles();
   },[])
   

  return (
   
    //link to button's route id is not working inside table

    <div> 
       <center> <h1>Vehicle Details</h1> </center>
     
        
           
     
 
        
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th scope="col">Vehicle id</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">Vehicle Model</th>
      <th scope="col">Type</th>
    
    </tr>
  </thead>
  <tbody>
  {vehicles.map((Vehicle) => (
    <tr>
     
     <td><Link to="vehicle/${Vehicle:_id}">    
 <Button variant="outline-primary">{Vehicle._id}</Button>{' '}
 </Link>
    </td>
      <td scope="row">{Vehicle.vehicleNo}</td>
      <td scope="row">{Vehicle.vModel}</td>
      <td scope="row">{Vehicle.vType}</td>
     
    
    </tr>
   
   ))}
    </tbody>
</Table>



        

     
<Link to="/addvehicle">
 <Button variant="outline-primary">Add Vehicle</Button>{' '}
 </Link>
    

    </div>
    
  )

}
  
export default AllVehicle;








