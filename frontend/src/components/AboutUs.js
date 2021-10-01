import React from "react";
import {Image} from "react-bootstrap"; 


    

function Aboutus (){
    return(
        <div>
            <div className="aboutsection">
                 <div className="heade">
                 <h1 align="center">About Us </h1>
                 <Image className="aboutpic" src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1631361652/Siyatha/siyatha1_pnt4dn.jpg"/>
                </div>
                <br/>

                <div className="para">
                  <p text-align="justify" className="us">At Siyatha, we believe that we provide better transportation in Sri Lanka. We planned to promote ourselves, more comfortable, more easier
                      and even more quicker. We are obsessively passionate about it and our mission here, is to make the reservation technologically.
                      It will help the people to do their transporting needs through devices. We focus on coming up with a software, to this company which  
                      holds 10 years of great service and a well-reputative customer based platform. From this plan, we decided to simplify this software for everyone.</p>
                </div>
                <br/>
                <div>
                  <h1 className="headstaff"> Main Pillars of the Company</h1>
                </div>
                <div><Image src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1631591095/Siyatha/4c0b528805aa65778aa92625407e4e2f_wl5rza.jpg" className="headImg"/></div>
                <div><Image src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1631591102/Siyatha/professional-employee-workplace_23-2147650830_tcdsfz.jpg" className="managestaff"/></div>
                <div><Image src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1632841646/Siyatha/photo-1560250097-0b93528c311a_lob4db.jpg" className="leadgroup"/></div>
            </div>
        </div>
              
    )
}

export default Aboutus;