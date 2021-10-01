import React from "react";
import {Image,Container,Col,Row} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom";


function Home(){

    return(
        
<div>
<Container>
  <Row>
    <Col></Col>
    <Col xs={14}>

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633024706/itp/2_wwwmkk.gif"
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
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </Col>
    <Col></Col>
  </Row>
  
</Container>


 
<Image src="https://res.cloudinary.com/hidl3r/image/upload/v1631381654/itp/LeBus-interior-luxury-coach-bus-background_pdzuvu.jpg" fluid />

    <Link to="/table"><button className="time">Time</button></Link>
    <Link to="/reservationHome"><button className="booknow">Book Now</button></Link>
    <Link to="/contactus"> <button className="contactnow">Contact Us</button></Link>
 


 </div>



    )

}

export default Home; 