import React, { useEffect, useState } from "react";
import axios from "axios";
import {Table,Button} from "react-bootstrap";
import { useParams } from "react-router";


const AllPassengers = (props) => {

    const[passenger,setPassenger] = useState([]);
    const[search, setSearch] = useState("")
    const{id} = useParams();
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

          {/*  function deletePassenger()
            {
                
                 fetch(`http://localhost:5000/passenger/delete/${id}`,{
                     method:"DELETE"
                 }).then((result)=>{
                     result.json().then((resp) =>{
                        
                         console.warn(resp)
                     })
                 })
            }*/}


         function Delete(id){

            const r = window.confirm ("Do you really want to Remove this Passenger?"); 
            if(r ==true){
                axios.delete(`http://localhost:5000/passenger/delete/${id}`).then ((res)=>{
                    alert("Delete Successfully");
                    getPassengerData()
                })
            }
         }
            function Update(_id) {
                console.log(_id)
                props.history.push("/profile/"+_id);
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

                     {/* {passenger.filter(Passengers => {
                          if(search == ""){
                              return Passengers
                          }
                          else if(Passengers.email.toLowerCase().includes(search.toLowerCase())){
                              return Passengers
                          }
                      }).
                      map(Passengers =>{
                          return <p> {Passengers.username } -{Passengers.nic}-{Passengers.email}-{Passengers.phoneno}</p>
                      })} */}


<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ID</th>
      <th>User Name</th>
      <th>NIC</th>
      <th>Email</th>
      <th>Phone number</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
       {passenger.filter(Passengers => {
                          if(search == ""){
                              return Passengers
                          }
                          else if(Passengers.email.toLowerCase().includes(search.toLowerCase())){
                              return Passengers
                          }
                      }).
                      map(Passengers =>{
                          return(
                        <tr key={Passengers._id}>
                        <td><Button onClick={()=>Update(Passengers._id)}>{Passengers._id}</Button></td>   
                        <td>{Passengers.username}</td>
                        <td>{Passengers.nic}</td>
                        <td>{Passengers.email}</td>
                        <td>{Passengers.phoneno}</td>
                       <td><button onClick = {() =>Delete(Passengers._id)}>Remove</button></td>
                      </tr>
                      );
                      })} 
    
                </tbody>
              </Table>

              <Button variant="secondary" size="lg"><a href="/userhandler"> Back </a></Button>{' '}
                  </div>
              );
};


export default AllPassengers
