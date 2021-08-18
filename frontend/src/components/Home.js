import React from "react";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";


function Home(){

    return(
        
<div>
 
<Image src="https://res.cloudinary.com/db-group/image/upload/v1628443620/ITP/Vehicle/LeBus-interior-luxury-coach-bus-background_tmuyry.jpg" fluid />

<Link to="/addvehicle">
 <Button variant="outline-primary">Primary</Button>{' '}
 </Link>



 


 </div>



    )

}

export default Home; 