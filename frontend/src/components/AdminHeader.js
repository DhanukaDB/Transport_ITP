import React from "react";

import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";


function AdminHeader(){

    return(

        
<Navbar bg="primary" variant="dark">
<Navbar.Brand href="/home">Siyatha Travels 🚌</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/reservationHome">Bookings</Nav.Link>
  <Nav.Link href="/allpayment">Payments</Nav.Link>
  <Nav.Link href="/employeeManagementHome">Employees</Nav.Link>
  <Nav.Link href="/allhires">Hires</Nav.Link>
</Nav>

</Navbar>


    )

}

export default AdminHeader; 