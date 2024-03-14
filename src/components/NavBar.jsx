import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BookStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">English</Nav.Link>
            <Nav.Link href="#features">French</Nav.Link>
            <Nav.Link href="#pricing">Portuguese</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    
    </>
  )
}