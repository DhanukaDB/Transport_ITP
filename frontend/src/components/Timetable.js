import React, {useState} from"react"
import axios from "axios";
import { Form ,Card, Button, Row, Col } from "react-bootstrap";

export default function Timetable(){

  const [from, setFrom] = useState(" ");
  const [to, setTo] = useState(" ");
  
  function sendData(e){
    e.preventDefault();
    
    const newTimetable ={
      from,
      to
    }

    axios.post("http://localhost:5000/time/add",newTimetable).then(()=>{
      ("Time added")
      setFrom('');
      setTo('');
      alert("Data added");
      window.location = `/viewTimetable`;
      

    }).catch((err)=>{
      alert("error");
    })


  }
  

  return(

     

 
<div>

<Form onSubmit={sendData}>
  
<Form.Label>From</Form.Label>
      <Form.Control placeholder="origin"
onChange={(e) => setFrom(e.target.value)} />
    
<Form.Label>To</Form.Label>
      <Form.Control placeholder="to"
 onChange={(e) => setTo(e.target.value)} />
   

    <Button variant="outline-success" type="submit"  className="subti" >Add Timetables</Button>
  
  
</Form>

</div>

)
}


