import React from "react";
import {Image} from "react-bootstrap"; 


    function ready(){
    //Take your div into one js variable
    var div = ("#divToShowHide");
    //Take the current position (vertical position from top) of your div in the variable
    var pos = div.position();
    //Now when scroll event trigger do following
    window.scroll(function () {
     var windowpos = window.scrollTop();
     //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
     // I am taking 100px scroll, you can take whatever you need
     if (windowpos >= (pos.top - 100)) {
       div.addClass("AfterScroll");
     }
     //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
     else {
       div.removeClass("AfterScroll");
     }
    });
}
  

function Aboutus (){
    return(
        <div>
            <div className="aboutsection">
                 <div className="heade">
                 <h1 align="center">About Us </h1>
                 <Image className="pic" src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1631361652/Siyatha/siyatha1_pnt4dn.jpg"/>
                </div>
                <br/>

                <div className="para">
                  <p text-align="justify" className="us">At Siyatha, we believe that we provide better transportation in Sri Lanka. We planned to promote ourselves, more comfortable, more easier
                      and even more quicker. We are obsessively passionate about it and our mission here, is to make the reservation technologically.
                      It will help the people to do their transporting needs through devices. We focus on coming up with a software, to this company which  
                      holds 10 years of great service and a well-reputative customer based platform. From this plan, we decided to simplify this software for everyone.</p>
                </div>
          
                <div >
                 <video controls autoplay className="vid">
                 <source src="https://res.cloudinary.com/dbw0cho6v/video/upload/v1631337926/Siyatha/Siyatha_gcte6l.mp4" type="video/mp4"/>
                     </video>
                </div>
            </div>
        </div>
              
    )
}

export default Aboutus;