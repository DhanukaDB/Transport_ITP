import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button,Modal,Form,Table } from 'react-bootstrap';

export default function UserLevel(){
    const[Values, setValues] = useState([]);
    const[username, setusername] = useState("");
    const[nic, setnic] = useState("");
    const[email, setemail] = useState("");
    const[phoneno, setphoneno] = useState("");
    const[password, setpassword] = useState("");
    const[userlevel, setuserlevel] = useState("");
    const [passengers, setPassengers] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getPassengers(){
          axios.get("http://localhost:5000/passenger/",).then((res)=>{
              setPassengers(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getPassengers();
    },[])
    
   


    const UpdatePassengerDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    

    function sendData(e) {
       
        e.preventDefault();
       

        var username1=null;
        var nic1=null;
        var email1=null;
        var phoneno1=null;
        var password1= null;
        var userlevel1= null;
      

    //set values

        if (username ===""){
            console.log('test null cond')
            username1=Values.username;
          }else{
            username1=username
            console.log('test not null cond')

        }
        if (nic ===""){
            nic1=Values.nic
          }else{
            nic1=nic
        }

        if (email===""){
            email1=Values.email

          }else{
           email1=email
        }

        if (phoneno===""){
            phoneno1=Values.phoneno
          }else{  
            phoneno1=phoneno
        }

        if (password===""){
           password1=Values.password
          }else{
           password1=password
       }

        if (userlevel===""){
            userlevel1=Values.userlevel
           }else{
            userlevel1=userlevel
        }

        const updatePassenger={
            id:Values._id,
            username:username1,
            nic:nic1,
            email:email1,
            phoneno:phoneno1,
            password:password1,
            userlevel:userlevel1
        }

        console.log('form submit payload =====',updatePassenger)


        axios.put(`http://localhost:5000/passenger/update/${updatePassenger.id}`, updatePassenger).then(()=>{
            alert("Passenger Details Updated");
            handleClose();
            window.location = `/userlevel`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
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
{passengers.filter(Passengers => {
              if(search === ""){
                  return Passengers
              }
              else if(Passengers.email.toLowerCase().includes(search.toLowerCase())){
                  return Passengers
              }
          }).map(Passengers =>{
              return(
            <tr key={Passengers._id}>
            <td><button> <a href={`${passengers.id}`}>{Passengers._id}</a></button></td> 
            <td>{Passengers.username}</td>
            <td>{Passengers.nic}</td>
            <td>{Passengers.email}</td>
            <td>{Passengers.phoneno}</td>
            <td>{Passengers.userlevel}</td>
            <Button variant="primary" onClick={()=> UpdatePassengerDeatails(Passengers)} className="uppay">
           Update
      </Button>
          </tr>
          
          
          );
         
          })} 

</tbody>
</Table>

<Modal show={show} onHide={handleClose} className="getfunc">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
         

         <Form.Group controlId="container">
           <Form.Label for="name">User Name</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.username}
           onChange={(e)=>{
            setusername(e.target.value);
          }} readonly="readonly"/>
         </Form.Group>

         <Form.Group controlId="container">
         <Form.Label for="nic">NIC</Form.Label>
         <Form.Control type="text" 
          defaultValue={Values.nic}
          onChange={(e)=>{
          setnic(e.target.value);
         }} />
         </Form.Group>


         <Form.Group controlId="container">
          <Form.Label for="email">Email</Form.Label>
          <Form.Control type="text" 
          defaultValue={Values.email}
          onChange={(e)=>{
          setemail(e.target.value);
          }} readonly="readonly"/>
          </Form.Group>


          <Form.Group controlId="container">
          <Form.Label for="phoneno">Phone number</Form.Label>
          <Form.Control type="Number" 
           defaultValue={Values.phoneno}
           onChange={(e)=>{
           setphoneno(e.target.value);
           }} readonly="readonly"/>
           </Form.Group>



           <Form.Group controlId="container">
           <Form.Label for="userlevel">User Level</Form.Label>
           <Form.Control type="text" 
            defaultValue={Values.userlevel}
             onChange={(e)=>{
             setuserlevel(e.target.value);
            }} />
           </Form.Group>
    
         <Button  className="upuserlevel" type="submit"> Edit details</Button>
         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                
                 <Button variant="secondary"><a href="/userhandler"> Back </a></Button>{' '}

 </div>
  );
     
  



}