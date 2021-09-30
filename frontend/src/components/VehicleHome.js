import React from "react";
import {Button, Image,Container,Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'



function VHome(){
    
   
   

    return(
        
<div>
 
<br/>
<center><h1>Vehicle Admin</h1></center>
<br/>

<Container>
  <Row>
    <Col>
    <br/><br/><br/><br/><br/><Link to = "/addvehicle">
  <Button variant="primary" size="lg" block>
  Add Vehicle
  </Button>
  </Link>
  <br/>
  <Link to ="/allvehicle">
  <Button variant="primary" size="lg" block>
  View All Vehicles Details
  </Button>
  </Link></Col>
    <Col><Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://res.cloudinary.com/hidl3r/image/upload/v1633024712/itp/5f1d841ff90d14f3b318893282e3909a_ec7ynq.gif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633024706/itp/2_wwwmkk.gif"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel></Col>
  </Row>

</Container>


<br/>

  





 </div>



    )

}

export default VHome; 