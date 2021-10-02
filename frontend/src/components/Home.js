import React from "react";
import {Image,Container,Col,Row} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom";


function Home(){

    return(
        
<div>


    <Carousel fade>
  
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633112534/itp/lapimg_oxr2tx.jpg"
      alt="First slide"
    />

    <Carousel.Caption >
   
      <h3>If you’re a frequent commuter looking for comfortable and convenient travel and great value for money, Greyhound Australia has got you covered. Our Commuter Pass will take the stress out of your commute! </h3>
      <p>Unlimited travel.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633112534/itp/bookbuttonimg_virvgj.jpg"
      alt="Third slide"
    />

    <Carousel.Caption >
    
      <h3>Often travelling between Sydney and Canberra and looking for the best mode of transportation? Look no further with our Commuter Pass. Avoid the traffic, tolls and delays, all the while saving money.</h3>
      <p>Best value for money.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>




 
<Image src="https://res.cloudinary.com/hidl3r/image/upload/v1631381654/itp/LeBus-interior-luxury-coach-bus-background_pdzuvu.jpg" fluid />

    <Link to="/table"><button className="time">Time</button></Link>
    <Link to="/table"><button className="booknow">Book Now</button></Link>
    <Link to="/table"> <button className="contactnow">Contact Us</button></Link>
 


 </div>



    )

}

export default Home; 