import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Button,Table } from 'react-bootstrap';
import jsPDF from "jspdf";

export default function UserHandlerReport(){

  const [passenger, setpassenger] = useState([]);
  const [user] = useState([]);

  const[_id]= useState([]);
  const[username] = useState("");
  const[nic] = useState("");
  const[email] = useState("");
  const[phoneno] = useState("");
  const[userlevel] = useState("");
  const[userleveldate] = useState("");
  
  const [search, setSearch] = useState("");
 
  useEffect(()=>{
    function getPassengers(){
        axios.get("http://localhost:5000/passenger/",).then((res)=>{
            setpassenger(res.data);
        }).catch((err)=>{
            alert(err.message)
        })
    }
    getPassengers();
  },[])
  

  const reportpassenger = passenger.filter(passengers => passengers.userlevel === "0");


  // a function that assigns bootstrap styling classes based on 
// the userlevel of the passengers
const assignColorToPassengerLevel = passengers => {
  if (passengers.userlevel === "3") {
    return "p-3 mb-2 bg-success text-white";
  } else if (passengers.userlevel === "2") {
    return "p-3 mb-2 bg-warning text-dark";
  } else if (passengers.userlevel === "1") {
    return "p-3 mb-2 bg-light text-dark";
  }
};


// define a UhReportGenerator function that accepts a passenger argument
const UhReportGenerator = passenger => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Id", "Username", "Nic", "Email", "Phoneno", "Userlevel", "Issue date"];
     console.log(_id);
        console.log(username);
        console.log(nic);
        console.log(email);
        console.log(phoneno);
        console.log(userlevel);
        console.log(userleveldate);
  // define an empty array of rows
  const tableRows = [];

  // for each passengers pass all its data into an array
  passenger.forEach(passengers => {
    const passengersData = [
      passengers._id,
      passengers.username,
      passengers.nic,
      passengers.email,
      passengers.phoneno,
      passengers.userlevel,
      passengers.userleveldate,

    ];
    // push each passenger's info into a row
    tableRows.push(passengersData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
 
  
  // passengers title. and margin-top + margin-left
  doc.text("New User level report.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`New userlevel report.pdf`);
  };

  return (
    <div className="App">
         <h1>Passengers' Level</h1>
      
            <button
              className="btn btn-primary"
              onClick={() => UhReportGenerator(reportpassenger)}
            >
              Generate monthly report
            </button>
    
      

    

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
<th>userleveldate</th>
<th>Level colour</th>
</tr>
</thead>
<tbody>
{passenger.filter(passengers => {
            if(search === ""){
                return passengers
            }
            else if(passengers.userlevel.toLowerCase().includes(search.toLowerCase())){
                return passengers
            }
        }).map(passengers =>{
            return(
          <tr key={passengers._id}>
          <td><button> <a href={`${passengers.id}`}>{passengers._id}</a></button></td> 
          <td>{passengers.username}</td>
          <td>{passengers.nic}</td>
          <td>{passengers.email}</td>
          <td>{passengers.phoneno}</td>
          <td>{passengers.userlevel}</td>
          <td>{passengers.userleveldate}</td>
          <td className={assignColorToPassengerLevel(passengers)}>
                  {passengers.userlevel}
           </td>
          
        </tr>
        
        
        );
       
        })} 

</tbody>
</Table>


 
       <Button variant="secondary"><a href="/userhandler"> Back </a></Button>{' '}
</div>

);
   
}

