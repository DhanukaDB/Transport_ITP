import React, { useState, useEffect } from "react";
import { Table, Modal, Form ,Button} from "react-bootstrap";
import axios from "axios";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
function Timetable(props){
const [timetable, setTimetable] = useState([]);
const [search, setSearch] = useState("");
const [_id, setid] = useState(" ");

const [from, setFrom] = useState(" ");
  const [to, setTo] = useState(" ");
  const [time, settime] = useState(" ");

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = (_id,from,to,time) => {
  setShow(true);
  setid(_id);
  setFrom(from);
  setTo(to);
  settime(time);
}


useEffect(() =>{

function gettime(){
      axios.get("http://localhost:5000/time/").then((res) =>{
         setTimetable(res.data);
         console.log(res.data);
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


function update(){
  const newTime ={
    _id,
    to,
    from,
    time
  }

  axios.put("http://localhost:5000/time/update/"+_id,newTime).then(()=>{
    setFrom('');
    setTo('');
    settime('');
    alert("Updated Successfully");
    window.location.reload();
  }).catch((err=>{
    alert(err)
  }))

 
}

const createPDF = (id,from,to,time) =>{

const unit = "pt";
const size = "A4"; //page size
const orientation = "portrait";
const marginLeft = 40;
const doc = new jsPDF( orientation , unit , size ); //create document
const title = `| Time Table |`;
const name = ` Siyatha Travels `;
const timeid = `Time Table ID :  ${id}`;
const froms = `From :  ${from}`;
const tos = `To:  ${to}`;
const arivetimes = `Time :  ${time}`;
 

doc.text (220, 40 ,title);
doc.text (80, 40 ,name);

doc.text(150, 140 ,timeid);  
doc.text(150, 180 ,froms);  
doc.text(150, 220 ,tos);  
doc.text(150, 260 ,arivetimes);  

doc.setFontSize( 20 );
doc.save ("Timetable.pdf")
}


 return (
   <div>
<div style={{paddingBottom:"5vh",paddingTop:"5vh"}}> 
       <center><h1>Time Table</h1></center>       
         <div style={{paddingleft:"10vh",paddingBottom:"1vh",paddingTop:"1vh"}} >
      <a href="/addtimetable">
      <Button variant="secondary" >Back</Button>{' '}
</a>
   
       
        </div>
     <Table striped bordered hover variant="dark" >
  <thead>
  <div style={{paddingleft:"2vh",paddingBottom:"1vh",paddingTop:"1vh"}}> 

  <input type="text" placeholder = "Search time table 'From' "  className="mr-2"
 onChange ={(e) =>{
  setSearch(e.target.value);
}} />
</div>
    <tr>
      
      <th>From</th>
      <th>To</th>
      <th>Start Time</th>
      <th>Edit</th>
      <th>Delete</th>
      <th>Download PDF</th>

    </tr>
  </thead>
  <tbody>

  {timetable.filter(Time => {
                          if(search === ""){
                              return Time
                          }
                          else if(Time.from.toLowerCase().includes(search.toLowerCase())){
                              return Time
                          }
                      }).
        
  
  
  
        map((Time) => {

    return(
      <tr key={Time._id}>      
      <td>{Time.from}</td>
      <td>{Time.to}</td>
      <td>{Time.time}</td>

      <td>
        <Button variant="outline-success" onClick={()=>handleShow(Time._id,Time.from,Time.to,Time.time)} >Edit</Button>
    </td>

    <td>
    <Button variant="outline-danger" onClick={()=>onDelete(Time._id)}>Delete</Button>

    </td>
    <td>
    <Button variant="outline-light"  onClick = {()=>createPDF(Time._id,Time.from,Time.to,Time.time)}>Generate PDF</Button>
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
        <Form onSubmit={update}>
  <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
  <Form.Label>From</Form.Label>
        <Form.Control placeholder="origin"
                value={from}
  onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

  <Form.Label>To</Form.Label >
        <Form.Control placeholder="to" 
        value={to}
   onChange={(e) => setTo(e.target.value)} />
           </div>
           <div style={{paddingBottom:"5vh",paddingTop:"1vh"}}> 

           <Form.Label>Start Time</Form.Label >
        <Form.Control placeholder="Time" 
                value={time}
   onChange={(e) => settime(e.target.value)} />
           </div>
  
     <Button variant="outline-success" type="submit">Edit Timetables</Button>
    
    
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
     </div> 
   </div>
 
   );

}
export default Timetable;