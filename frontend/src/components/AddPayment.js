import React,{useState} from "react";
import { Form, Button, Image} from "react-bootstrap";
import axios from "axios";




export default function AddPayment(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setCode] = useState("");
    const [phonenum, setNum] = useState("");
    const [cardnum, setCard] = useState("");
    const [expirydate, setDate] = useState("");
    const [ccv, setCcv] = useState("");

    function sendData1(e) {
      e.preventDefault();
      
      const newPayment = {
        name,
        address,
        city,
        postalcode,
        phonenum,
        cardnum,
        expirydate,
        ccv
      }

      
      
      axios.post("http://localhost:5000/payment/add", newPayment).then(()=>{
        alert("Payment details was recorded by assuring security");
        window.location=`/success`;
      }).catch((err)=>{
          alert(err)
      })

    }

    function isNumberKey(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    
      return true;
    }
    
    function inputNumberLength(e) {
      e.preventDefault();
      alert("Input 10 numbers to your phone number");
    }
    
    function inputCardLength(e){
      e.preventDefault();
      alert("Input valid 16 numbers for card number");
    }
    
    function inputCcvLength(e){
      e.preventDefault();
      alert("Input 3 numbers for CCV");
    }
    
    function inputDateLength(e){
      e.preventDefault();
      alert("Input valid date");
    }
    

    


    return(
        <div class="container" className="paymentGateway">

         
         <Form onSubmit={sendData1}>
  <Form.Group controlId="container" className="paymentName">
    <Form.Label for="name">Name on Card</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
    onChange={(e)=>{
      setName(e.target.value);
    }} required/>
    <Form.Text className="text-muted">
      For payment purposes, these details will be recorded.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="container" className="paymentAddress">
    <Form.Label for="address">Address</Form.Label>
    <Form.Control type="text" placeholder="Ex: No,Street name" 
     onChange={(e)=>{
      setAddress(e.target.value);
    }} required/>
    </Form.Group>

    <Form.Group controlId="container" className="paymentCity">
    <Form.Label for="city">City</Form.Label>
    <Form.Control type="text" placeholder="Enter city name" 
    onChange={(e)=>{
      setCity(e.target.value);
    }} required/>
    </Form.Group>

    <Form.Group controlId="container" className="paymentCode">
    <Form.Label for="postalcode">Postal Code</Form.Label>
    <Form.Control type="number" onKeyPress={isNumberKey} placeholder="Enter code"
    onChange={(e)=>{
      setCode(e.target.value);
    }} required/>
    </Form.Group>

  <Form.Group controlId="container" className="paymentNumber">
    <Form.Label for="phonenum">Phone Number</Form.Label>
    <Form.Control type="number" onKeyPress={isNumberKey} placeholder="07********" min="010000000" max="1000000000" maxLength="10" onInvalid={inputNumberLength}
    onChange={(e)=>{
      setNum(e.target.value);
    }} required/>
  </Form.Group>

  
  
 
<div id="payId" class="container" className="card1">
 <Image src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1631211287/Siyatha/Card1_etkils.jpg" fluid className="img1" /> 


  <Form.Group className="pay1" controlId="cardNumber">
<Form.Control size="lg" type="number" placeholder="Enter Card Number" onKeyPress={isNumberKey} min="1000000000000000" max="9999999999999999" maxLength="16" onInvalid={inputCardLength} 
onChange={(e)=>{
  setCard(e.target.value);
}} required />
  </Form.Group>
  <Form.Group controlId="expiryDate" className="pay2">
<Form.Control type="number" placeholder="MM/YY" min="0" max="3200" maxLength="4" onKeyPress={isNumberKey} onInvalid={inputDateLength}
onChange={(e)=>{
  setDate(e.target.value);
}} required/>
  </Form.Group>
  <Form.Group controlId="CCV" className="pay3">   
<Form.Control type="number" placeholder="Enter CCV" onKeyPress={isNumberKey} min="100" max="999" maxLength="3" onInvalid={inputCcvLength} 
onChange={(e)=>{
  setCcv(e.target.value);
}} required/>
  </Form.Group>

  <Button variant="primary" type="submit" className="sub1" >
    Pay
  </Button>

</div>
</Form>

     </div>

  
    )
}

