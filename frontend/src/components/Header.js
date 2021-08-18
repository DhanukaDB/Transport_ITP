import React from "react";

import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";


function Header(){

    return(

        

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Siyatha Travels 🚌 </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#booking">Buy Tickets</Nav.Link>
      <Nav.Link href="#pricing">Timetables</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Hire Bus</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Feedbacks</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">About us</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Packages</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Sign in</Nav.Link>
      <Nav.Link href="#deets">Sign up</Nav.Link>
      <Nav.Link eventKey={2} href="#Siyatha">
      👤
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

}

export default Header; 