import React from "react";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";


function Footer(){

  var curr_year = new Date().getFullYear();

  return (
    <footer><body>
       <Button variant="#">FAQ 💡</Button>
       <Button variant="#">CONTACT US 📲</Button>
       <Button variant="#">ABOUT US 🏷️</Button>
     <center> <p>Copyright @ {curr_year}</p></center>
    </body></footer>

  )

}
  
export default Footer;