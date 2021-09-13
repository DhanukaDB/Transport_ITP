import React, {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";





function AllVehicle(props){

   const [vehicles, setVehicles] = useState([]);
    const [search, setSearch] = useState("");


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
   
   //"VehicleDetails/+_id //check this 
   //try with find one

   function Update(_id) {
      console.log(_id)
      props.history.push("/vehicledetails/"+_id);
  }

  return (
   
    //link to button's route id is not working inside table

    <div> 
       <center> <h1>Vehicle Details</h1> </center>
     
        
           
   
 
 
 <br/>
        
      <Table striped bordered hover variant="dark">
  <thead>
  <input type="text" placeholder = "Search vehicle number " onChange ={(e) =>{
  setSearch(e.target.value);
}} />
    <tr>
      <th scope="col">Vehicle id</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">Vehicle Model</th>
      <th scope="col">Type</th>
    
    </tr>
  </thead>
  <tbody>

  {vehicles.filter(Vehicle => {
                          if(search == ""){
                              return Vehicle
                          }
                          else if(Vehicle.vehicleNo.toLowerCase().includes(search.toLowerCase())){
                              return Vehicle
                          }
                      }).
    
    
  map((Vehicle) => {

    return(
      <tr key={Vehicle._id}>
      
      <td> <Button variant="outline-primary" onClick={()=>Update(Vehicle._id)}>{Vehicle._id}</Button></td>
      <td>{Vehicle.vehicleNo}</td>
      <td>{Vehicle.vModel}</td>
      <td>{Vehicle.vType}</td>
     
    </tr>
    );
    })} 

   
    </tbody>
</Table>



        

     
<Link to="/addvehicle">
 <Button variant="outline-primary">Add Vehicle</Button>{' '}
 </Link>
    
 <br/>
 
    </div>
    
  )

}
  
export default AllVehicle;








