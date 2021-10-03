import React, {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";





function AllHires(props){

   const [hires, setHires] = useState([]);
    const [search, setSearch] = useState("");


   useEffect(() =>{
    function getHires(){
        axios.get("http://localhost:5000/hirebus/").then((res) =>{
           setHires(res.data);
        }).catch((err) => {
           alert(err.message);
        })
 }
    getHires();
   },[])
   

   function Delete(_id) {

    console.log(_id)
    axios.delete("http://localhost:5000/hirebus/delete/"+_id).then(()=>{
  
        alert("Vehicle Deleted Successfully");
        window.location = `/`;
  
  
      
      
      
  
      }).catch((err=>{
  
        alert(err)
      }))
    
  }

  return (
   
    //link to button's route id is not working inside table

    <div> 
       <center> <h1>Hirebus Details</h1> </center>
     
        
           
   
 
 
 <br/>
        
      <Table striped bordered hover variant="dark">
  <thead>
  <input type="text" placeholder = "Search Hirebus " onChange ={(e) =>{
  setSearch(e.target.value);
}} />
    <tr>
    <th scope="col"> </th>
      <th scope="col"> Name</th>
      <th scope="col"> Mobile Number</th>
      <th scope="col"> from</th>
      <th scope="col">Destination</th>
      <th scope="col"> Date</th>
      <th scope="col">Email</th>
    
    </tr>
  </thead>
  <tbody>

  {hires.filter(Hirebus => {
                          if(search == ""){
                              return Hirebus
                          }
                          else if(Hirebus.to1.toLowerCase().includes(search.toLowerCase())){
                              return Hirebus
                          }
                      }).
    
    
  map((Hirebus) => {

    return(
      <tr key={Hirebus._id}>
      
      <td> <Button variant="outline-primary" onClick={()=>Delete(Hirebus._id)}>Remove</Button></td>
      <td>{Hirebus.name}</td>
      <td>{Hirebus.mobileNumber}</td>
      <td>{Hirebus.from}</td>
      <td>{Hirebus.to1}</td>
      <td>{Hirebus.date}</td>
      <td>{Hirebus.questions}</td>
      
     
    </tr>
    );
    })} 

   
    </tbody>
</Table>


    

 <br/>
 <br/>
    </div>
    
  )

}
  
export default AllHires;








