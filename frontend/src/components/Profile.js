import React,{useState,useEffect} from "react";
import axios from 'axios'

export default function Profile ({props}){
  const [username, setUsername] = useState("");
  const [nic, setNic] =useState("");
  const [email,setEmail] = useState("");
  const [phoneno,setPhoneno] = useState("");

  

  useEffect(() =>{
    function getPassenger(){

      const email = props.match.params.email;
       console.log(email);
        axios.get("http://localhost:5000/passenger/"+email).then((res) =>{

           setUsername(res.data.username);
           setNic(res.data.nic);
           setEmail(res.data.email);
           setPhoneno(res.data.phoneno);
           console.log(res.data);

        }).catch((err) => {
            alert(err.message);
        })
 }
    getPassenger();
   },[])


  return(
    <div></div>

  )

  
}

