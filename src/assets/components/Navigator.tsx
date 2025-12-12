import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../imgs/logo.png';

export default function Navigator(): React.ReactElement {
    return(
        <Navbar bg="dark" style={{ position: "sticky", top: 0, zIndex: 1000, borderBottom: "2px rgba(233, 30, 99, 1)" }} data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="PITBOX AI LOGO"
              src={logo}
              width={48}
              height={48}
              className="d-inline-block align-center"
            />
            <span className="ms-2 fs-4"><b>PITBOX AI</b></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#" className="text-grey">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-grey">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-grey">
                Pitbox AI
              </Nav.Link>
              <Nav.Link href="#" className="text-grey">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    );
}
