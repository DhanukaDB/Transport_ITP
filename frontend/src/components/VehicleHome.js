import React from "react";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";


function VHome(){
    
   
   

    return(
        
<div>
 
<br/>
<center><h1>Vehicle Admin</h1></center>
<br/>


<center><Image src="https://res.cloudinary.com/hidl3r/image/upload/v1631381664/itp/360_F_187684566_hroSDp0dkmSpZun0SJvETmuQxoN5dzEB_tjwwwx.jpg" fluid />
</center>

<br/>
<Link to = "/addvehicle">
  <Button variant="primary" size="lg" block>
  Add Vehicle
  </Button>
  </Link>
  <br/>
  <Link to ="/allvehicle">
  <Button variant="primary" size="lg" block>
  View All Vehicles Details
  </Button>
  </Link>
  


  <br/>
  <br/>


 


 </div>



    )

}

export default VHome; 