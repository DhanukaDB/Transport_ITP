import React, { useEffect, useState } from "react";
import axios from "axios";
import {Button ,Image} from "react-bootstrap";
import { useParams } from "react-router";
import {useHistory} from 'react-router-dom'

export default function EditUserLevel () {
    const history = useHistory()
    const[setPassenger] = useState("");
    const [username, setUsername] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [userlevel, setUserlevel] = useState("");
    const {id, setId} = useParams();

    useEffect(() => {
     axios.get(`http://localhost:5000/passenger/get/${id}`).then((res) =>{
        console.log(res.data);
        setUsername(res.data.username);
        setNic(res.data.nic);
        setEmail(res.data.email);
        setPhoneno(res.data.phoneno);
        setUserlevel(res.data.userlevel)
     }).catch((err) =>{
            alert(err)
        })
    },[]);

   
        


    function SendUpdateUserLevel(e){
        e.preventDefault(); 
    
        const updateUserLevel = {

            username,
            nic,
            email,
            phoneno,
            userlevel

     }
                axios.put(`http://localhost:5000/passenger/update/${id}`, updateUserLevel).then(() =>{
                      alert("successfully updated"); 
                       window.location = `/`;

                    
      
        }).catch((err) =>{
            alert(err);
        })
    
   }


   return (
    <div className="page-content page-container" id="page-content"  onSubmit = {SendUpdateUserLevel}>
        <form >
        <div className="padding">
        
                
             <div className="row m-l-0 m-r-0">
                        
                 <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">


                            <Image  src="ulogin.png"/>
                             <h5 >User ID</h5>
                             <input 
                                 type = "text"
                                 placeholder = ""
                                 id="id"
                                 value = {id}
                                 onChange={(e) => setId (e.target.value)}
                                 />

                             <p>UserLevel</p>
                             <input 
                               type = "text"
                                placeholder = ""
                                id="userlevel"
                                value = {userlevel}
                                onChange={(e) => setUserlevel (e.target.value)}
                            />

                         </div>
                     </div>
                           <div className="col-sm-8">

                               <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                     <div className="row">
 
                                      <div className="col-sm-6">
                                          <p className="m-b-10 f-w-600">UserName</p>
                                          <input 
                                             type = "text"
                                             placeholder = ""
                                             id="username"
                                             value = {username}
                                             onChange={(e) => setUsername (e.target.value)}
                                          />

                                        </div>

                                        <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">NIC</p>
                                        <input 
                                             type = "text"
                                             placeholder = ""
                                             id="nic"
                                             value = {nic}
                                             onChange={(e) => setNic (e.target.value)}
                                          />
                                        </div>
                                    </div>

                                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                    <div className="row">

                                        <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <input 
                                             type = "text"
                                             placeholder = ""
                                             id="email"
                                             value = {email}
                                             onChange={(e) => setEmail (e.target.value)}
                                          />
                                         </div>



                                        <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone Number</p>
                                        <input 
                                             type = "text"
                                             placeholder = ""
                                             id="phoneno"
                                             value = {phoneno}
                                             onChange={(e) => setPhoneno (e.target.value)}
                                          />
                                        </div>

                                
                                   </div>   
                 </div>
             </div>
             <center>
             <Button variant="primary" href={`/update/${id}`}>Confirm to give UserLevel</Button>{' '}
             <Button variant="secondary"><a href="/userlevel"> Cancel </a></Button>{' '}
             </center>
      </div> 
     
      
      </form>
 </div>

   )


}
