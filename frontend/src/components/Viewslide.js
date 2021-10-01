import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Viewslide = () => {
  return (
    <div style={{paddingBottom:"7vh",paddingTop:"26vh"}} >
      <Carousel variant="dark" >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/iplus/image/upload/v1631988620/new/time-animation_1_gbg2y9.gif"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/iplus/image/upload/v1631988677/new/coming_soon.964ed161_panmx2.gif"
      alt="Second slide"
    />

    
  </Carousel.Item>
 
</Carousel>


        </div>
  );
};

export default Viewslide;