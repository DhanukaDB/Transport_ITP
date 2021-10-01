import React, {useState} from"react"
import axios from "axios";
import { Form ,Card, Button, Row, Col } from "react-bootstrap";

export default function Timetable(){

  const [from, setFrom] = useState(" ");
  const [to, setTo] = useState(" ");
  const [time, settime] = useState(" ");
 
  function sendData(e){  
    if(!(from.trim().length > 2)){
      alert("Invalid 'From' value!")
      return
  }else if(!(to.trim().length > 2)){
    alert("Invalid 'To' value!")
    return
}
    e.preventDefault();
    
    const newTimetable ={
      from,
      to,
      time
    }

    axios.post("http://localhost:5000/time/add",newTimetable).then(()=>{
      ("Timetable added")
      setFrom('');
      setTo('');
      settime('');
      alert("Timetable added added");
      window.location = `/viewTimetable`;
      

    }).catch((err)=>{
      alert("error");
    })
  }  
  return(
<div>
<div style={{paddingleft:"0.1vh",paddingBottom:"15vh",paddingTop:"15vh"}}> 

<Card style={{ width: '58rem' }}>
  <Card.Body>


  <Form onSubmit={sendData}>
  <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
  <Form.Label>From</Form.Label>
        <Form.Control placeholder="origin"
  onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

  <Form.Label>To</Form.Label >
        <Form.Control placeholder="to" 
   onChange={(e) => setTo(e.target.value)} />
           </div>
           <div style={{paddingBottom:"5vh",paddingTop:"1vh"}}> 

           <Form.Label>Start Time</Form.Label >
        <Form.Control placeholder="Time" 
   onChange={(e) => settime(e.target.value)} />
           </div>
  
     <Button variant="outline-success" type="submit">Add Timetables</Button>
    
    
  </Form>
  
  </Card.Body>
</Card>
</div>

</div>

)
}


