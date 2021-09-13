import React, {useState} from"react"
import axios from "axios";

export default function Timetable(){

  const [from, setFrom] = useState(" ");
  const [to, setTo] = useState(" ");
  
  function sendData(e){
    e.preventDefault();
    
    const newTimetable ={
      from,
      to
    }

    axios.post("http://localhost:3000/time/add",newTimetable).then(()=>{
      ("Time added")
      setFrom('');
      setTo('');


    }).catch((err)=>{
      alert("error")
    })


  }
  


  return(

      <div className="container">
      <form onSubmit={sendData}>
      <div class="From">
  <div class="col-sm-7" >
  <label for="Timetable" class="From" className="timeti">Timetables</label>
  <label for="From" class="From" className="froti">From:-</label>
    <input type="text" class="form-control" className="fromti" placeholder="Origin" 
    onChange={(e)=>{

      setFrom(e.target.value);

    }} />
  </div>

  
 
  <div class="To">
  <label for="To" class="To" className="tti">To:-</label> 
    <input type="text" class="form-control" className="toti" placeholder="To" 
    onChange={(e)=>{

      setTo(e.target.value);

    }} />

  </div>
  

  
  </div>
  <div class="Submit">
    <button type="submit" class="btn btn-primary" className="subti" >Add Timetables</button>
  </div>
  </form>
</div>
 

)
}


