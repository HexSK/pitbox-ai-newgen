import React from "react";
import logo from "./assets/imgs/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Navbar, Nav, Card } from "react-bootstrap";

export default function App() {
  return (
    <>
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
    <div className="app bg-dark text-white">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs="auto" className="text-center">
            <img
            id="main-logo"
            src={logo}
            alt="PITBOX AI LOGO"
            width={screen.availWidth*0.167}
            height={screen.availWidth*0.167}
            />
            <h1>Get the perfect car setup - powered by AI</h1>
            <h5>Upload your setup, tell us what's wrong, and let Pitbox AI fix it for you.</h5>

            <Button
              id="improve-btn"
              onClick={() => {
                const targetDiv = document.getElementById("how-it-works-section");
                if (targetDiv) {
                  targetDiv.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{ backgroundColor: "#e91e63" }}
            >
              🛠️Improve my setup
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="my-1" id="how-it-works-section">
        <Row className="justify-content-center">
          <Col xs={12} md={5} className="p-2 my-2 my-md-5 mx-3">
            <Card className="text-white h-100" style={{ backgroundColor: "#e91e63" }} onMouseEnter={{}}>
              <Card.Body>
                <Card.Title>
                <h2 className="card-title text-white text-start">
                🤖How it works
                </h2>
                </Card.Title>
                <div className="text-start mx-4 mt-4">
                  <div className="mb-3">
                    <h4>1. Upload your setup</h4>
                    <p>Just upload your <code>.ini</code> setup file.</p>
                  </div>
                  <div className="mb-3">
                    <h4>2. Describe your problem</h4>
                    <p>Oversteer? Poor traction? Brakes feel weird? Tell us what's bugging you.</p>
                  </div>
                  <div className="mb-3">
                    <h4>3. Get your brand new setup</h4>
                    <p>Our AI will analyze your setup and give you a completely new one.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={5} className="p-2 my-2 my-md-5 mx-3">
            <Card className="text-white h-100" style={{ backgroundColor: "#e91e63" }}>
              <Card.Body >
                <Card.Title>
                  <h2 className="text-white text-start">
                    💡Why use Pitbox AI?
                  </h2>
                </Card.Title>
                <div className="text-start mx-4 mt-4">
                  <p>⚡Fast & Easy: Upload and get results in seconds.</p>
                  <p>🛠️Custom Feedback: Every tweak based on your issue.</p>
                  <p>🧠AI-Powered: Trained with real motorsports knowledge.</p>
                  <p>💾Download-Ready: We send you the edited setup file instantly.</p>
                  <p>🔄Personalized: Your setup, your way - no more generic recommendations.</p>
                  <p>💡Smart: Our AI analyzes your setup and gives you the best possible recommendations.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

