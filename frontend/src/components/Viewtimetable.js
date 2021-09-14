import React, { useState, useEffect, Button } from "react";
import { Table, Modal, Form } from "react-bootstrap";
import axios from "axios";
function Timetable(props){
const [timetable, setTimetable] = useState([]);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


useEffect(() =>{

function gettime(){
      axios.get("http://localhost:5000/time/").then((res) =>{
         setTimetable(res.data);
         
      }).catch((err) => {
          alert(err.message);
      })
}
  gettime();
 },[])



 function onDelete(_id){
  console.log(_id);
  axios.delete("http://localhost:5000/time/delete/"+_id ).then((res) =>{
     alert('Deleted Successfully'); 
     window.location.reload();
 }).catch((err) => {
     alert(err.message);
 })
}

function onEdit(_id){
  console.log(_id);
  axios.put("http://localhost:5000/time/get/"+_id ).then((res) =>{
     alert('Update Successfully'); 
     window.location.reload();
 }).catch((err) => {
     alert(err.message);
 })
}

 return (
   <div>
       <center><h1>Time Table</h1></center>
     <Table striped bordered hover variant="dark" >
  <thead>
    <tr>
      
      <th>From</th>
      <th>To</th>
      
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

 

  {timetable.
    
    
  map((Time) => {

   
  

    return(
      <tr key={Time._id}>
      
      
      <td>{Time.from}</td>
      <td>{Time.to}</td>
      
      <td>
        <button onClick={handleShow}>Edit</button>
    </td>

    <td>
    <button onClick={()=>onDelete(Time._id)}>Delete</button>
    </td>
     
    </tr>
    );
    })} 

    </tbody>
  </Table >
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
   </div>
 
   );

}
export default Timetable;