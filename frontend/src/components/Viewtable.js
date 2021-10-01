import React, { useState, useEffect } from "react";
import { Table} from "react-bootstrap";
import axios from "axios";

function Timetable(props){
const [timetable, setTimetable] = useState([]);
const [search, setSearch] = useState("");

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

 return (
   <div>
<div style={{paddingBottom:"5vh",paddingTop:"5vh",paddingLeft:"5vh",paddingRight:"5vh"}}> 
       <center><h1>Time Table</h1></center>       
         <div style={{paddingleft:"10vh",paddingBottom:"1vh",paddingTop:"1vh"}} >
 
   
       
        </div>
     <Table striped bordered hover size="sm" >
  <thead>
  <div style={{paddingleft:"2vh",paddingBottom:"1vh",paddingTop:"1vh"}}> 
  <div style={{paddingBottom:"1vh",paddingTop:"1vh"}}> 
  <input type="text" placeholder = "Search time table 'From' "  className="mr-2"
 onChange ={(e) =>{
  setSearch(e.target.value);
}} />
 </div>

</div>
    <tr>
      
      <th>From</th>
      <th>To</th>
      <th>Start Time</th>
      

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
    </tr>

    );
    })} 

    </tbody>

  </Table >
  
     </div> 
   </div>
 
   );

}
export default Timetable;