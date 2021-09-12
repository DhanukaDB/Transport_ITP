import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {container, row, ListGroup} from 'react-bootstrap';

export default function AllPayment(){

    const [payments, setPayments] = useState([]);

    useEffect(()=>{
      function getPayments(){
          axios.get("http://localhost:5000/payment/",).then((res)=>{
              setPayments(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getPayments();
    },[])
    
    const deletepayment = (id) =>{
        axios.delete(`http://localhost:5000/payment/delete/${id}`);
    }

    function sendDetails(e){
        e.preventDefault();
        window.location=`/updatepayment`
    }

       
     

    return(
        <div>
            <h1>All Payments</h1>
        {payments.map((val,key)=>{
            return(
             <div key={key} className="payments">
                 <container length="100px">
                      <row>    
                 <ListGroup>
                 <ListGroup.Item>{val.name}</ListGroup.Item>
                 <ListGroup.Item>{val.address}</ListGroup.Item>
                 <ListGroup.Item>{val.city}</ListGroup.Item>
                 <ListGroup.Item>{val.postalcode}</ListGroup.Item>
                 <ListGroup.Item>{val.phonenum}</ListGroup.Item>
                 <ListGroup.Item>{val.cardnum}</ListGroup.Item>
                 
                 
                 <button className="upd" onClick={sendDetails}>Update</button>
                 <button className="del" onClick={()=> deletepayment(val._id)}> Delete</button>
                 <button className="ref">Ask for refund</button>
                 </ListGroup>
                
                 </row>
                 <br />
                 </container>
            </div>
            );
        })}
        </div>
    );
}

