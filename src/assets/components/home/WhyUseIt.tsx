import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WhyUseIt(): JSX.Element{
    return(
        <Container className="my-1" id="how-it-works-section">
        <Row className="justify-content-center">
          <Col xs={12} md={5} className="p-2 my-2 my-md-5 mx-3">
            <Card className="text-white h-100" style={{ backgroundColor: "#e91e63" }} onMouseEnter={() => {}}>
              <Card.Body>
                <Card.Title>
                <h2 className="card-title text-white text-start">
                🤖How it works
                </h2>
                </Card.Title>
                <div className="text-start mx-4 mt-4">
                  <div className="mb-3">
                    <h4>1. Upload your setup</h4>
                    <p>Just upload your <code className="text-white">.ini</code> setup file.</p>
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
    );
}
