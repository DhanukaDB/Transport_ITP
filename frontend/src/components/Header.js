import React from "react";

import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";


function Header(){

    return(

        

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/home">Siyatha Travels 🚌 </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/seatsb">Buy Tickets</Nav.Link>
      <Nav.Link href="/table">Timetables</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/hirebus">Hire Bus</NavDropdown.Item>
        <NavDropdown.Item href="/readf">Feedbacks</NavDropdown.Item>
        <NavDropdown.Item href="/about">About us</NavDropdown.Item>
        <NavDropdown.Item href="/searchfordrivers">Drivers</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
    
      <Nav.Link eventKey={2} href="/">
      👤 
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

}

export default Header; 