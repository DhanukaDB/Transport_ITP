import React from "react";
import {Button, Image,Container,Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'



function VHome(){
    
   
   

    return(
        
<div>
 
<br/><br/><br/>
<center><h1>Vehicle Admin</h1></center>

<br/><br/><br/><br/>

<Container>
  <Row>
    <Col>
    <br/><br/><br/><br/><br/>
    
  <Link to = "/addvehicle">
  <Button variant="primary" size="lg" block>
  Add Vehicle
  </Button>
  </Link>
  <br/>
  
  <Link to ="/allvehicle">
  <Button variant="secondary" size="lg" block>
  View All Vehicles Details
  </Button>
  </Link>
  <br/>
  
  <Link to ="/allhires">
  <Button variant="secondary" size="lg" block>
  All requested Hire Details
  </Button>
  </Link>
  </Col>
    <Col><Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633024706/itp/2_wwwmkk.gif"
      
    />
   
  </Carousel.Item>
  
 
</Carousel></Col>
  </Row>

</Container>


  

<br/><br/><br/><br/><br/>

  
   </div>



   )

}

export default VHome; 