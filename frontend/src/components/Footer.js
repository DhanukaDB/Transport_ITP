import React from "react";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";


function Footer(){

  var curr_year = new Date().getFullYear();

  return (
    <footer><body>
       <Button variant="#">FAQ 💡</Button>
       <Button variant="#">CONTACT US 📲</Button>
     
<Link to= "/aboutus"><Button variant="/aboutus">ABOUT US 🏷️</Button> </Link>
     <center> <p>Copyright @ {curr_year}</p></center>

     <img src="https://img.icons8.com/material/24/fa314a/youtube--v1.png"/>
    </body></footer>

  )

}
  
export default Footer;