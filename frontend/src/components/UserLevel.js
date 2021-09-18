import React, { useEffect, useState } from "react";
import axios from "axios";
import {Table,Button} from "react-bootstrap";



const UserLevel = (props) => {

    const[passenger,setPassenger] = useState([]);
    const[search, setSearch] = useState("")
    

              const getPassengerData = async () => {
                  try{
                      const data = await axios.get("http://localhost:5000/passenger/")
                      console.log(data.data)
                      setPassenger(data.data)
                  }
                  catch(e){
                      console.log(e)
                  }
              }

              useEffect(() => {
                  getPassengerData()
              }, [])

         

            
            
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
                        <td><Button>{Passengers._id}</Button></td>   
                        <td>{Passengers.username}</td>
                        <td>{Passengers.nic}</td>
                        <td>{Passengers.email}</td>
                        <td>{Passengers.phoneno}</td>
                        <td>{Passengers.userlevel}</td>
                        <td><button ><a href="/edituserlevel">Edit </a></button></td>
                      {/* <td><button onClick = {() =>SendUpdateUserLevel(Passengers._id)}>Edit</button></td> */}
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
