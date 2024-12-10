import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"
function Header() {
  return (
    <>




  
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="#home"><img width={"55%"} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link className='active' href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Make a Reservation</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



    </>
  )
}

export default Header