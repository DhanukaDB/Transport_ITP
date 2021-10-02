
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Table,Button} from "react-bootstrap";
import {Link} from "react-router-dom";


function UserLevel  (props)  {

    const[passenger,setPassengers] = useState([]);
    const[search, setSearch] = useState("");
    

    
    useEffect(() =>{
        function getPassengers(){
            axios.get("http://localhost:5000/passenger/").then((res) =>{
               setPassengers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
     }
        getPassengers();
       },[])
       



    function update(_id){  
         props.history.push("/edituserlevel/"+_id);
         console.log(_id)
   }        

            
    
 return (
        <div className="App">
         <h1>All Passengers</h1>

          <input
            type="text"
            placeholder="Search here"
            onChange={e =>{
           setSearch(e.target.value)
           }}
          />

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>ID</th>
      <th>User Name</th>
      <th>NIC</th>
      <th>Email</th>
      <th>Phone number</th>
      <th>UserLevel</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
       {passenger.filter(Passengers => {
                          if(search === ""){
                              return Passengers
                          }
                          else if(Passengers.email.toLowerCase().includes(search.toLowerCase())){
                              return Passengers
                          }
                      }).map(Passengers =>{
                          return(
                        <tr key={Passengers._id}>
                       
                        <td>{Passengers.username}</td>
                        <td>{Passengers.nic}</td>
                        <td>{Passengers.email}</td>
                        <td>{Passengers.phoneno}</td>
                        <td>{Passengers.userlevel}</td>
                    
                       <td><button onClick = {() =>update(Passengers._id)}>{Passengers._id}</button></td> 
                      </tr>
                      );
                      })} 
    
                </tbody>
              </Table>
              <Button variant="secondary"><a href="/userhandler"> Back </a></Button>{' '}
                  </div>
              );
};


export default UserLevel

