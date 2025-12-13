import React from "react";

import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from "../imgs/logo.png";

export default function About(): React.ReactElement {
    return (
        <>
            <Container>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col xs="auto" className="text-center">
                        <img
                            id="main-logo"
                            src={logo}
                            alt="PITBOX AI LOGO"
                            width={Math.floor((window.screen?.availWidth || 1200) * 0.167)}
                            height={Math.floor((window.screen?.availWidth || 1200) * 0.167)}
                        />
                        <h1>About Pitbox AI</h1>
                        <button
                            id="findoutmore-btn"
                            className="my-4 fs-4 text-white"
                            onClick={() => {
                                const targetDiv = document.getElementById("about-paragraphs");
                                if (targetDiv) {
                                    targetDiv.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            style={{ backgroundColor: "#e91e63", border: "none", borderRadius: "0.67vh" }}
                            onMouseEnter={e => { (e.target as HTMLElement).style.fontWeight = 'bold'; }}
                            onMouseLeave={e => { (e.target as HTMLElement).style.fontWeight = 'normal'; }}
                        >
                            ⬇️Find Out More⬇️
                        </button>
                    </Col>
                </Row>
            </Container>
            <Container className="my-1" id="about-paragraphs">
                <Row className="justify-content-center px-4">
                    <p>
                        Pitbox AI is a <b>solo-built</b> project focused on one problem: car setup is <b>confusing</b>, time-consuming, and <b>gatekept by experience most drivers don’t have.</b>
                    </p>
                    <br/>
                    <p>
                        Right now, Pitbox AI is built for <b>sim racers.</b> It helps drivers understand and improve their car setups without relying on <i>
                            guesswork, forum myths,
                            or copy-pasting someone else’s tune.
                        </i> The goal isn’t magic. It’s <b>clarity</b>. Better decisions, faster learning, and setups that actually make sense for <b>how you drive.</b>
                    </p>
                    <br/>
                    <p>
                        This project is intentionally hands-on and experimental. Every feature is built, tested, and iterated with a long-term vision in mind: expanding from simulation into real-world applicability as the data and models become more realistic.
                    </p>
                    <br/>
                    <p>
                        Pitbox AI isn’t a polished corporate product and it’s not trying to be. It’s a focused, evolving tool built by someone who cares more about performance and understanding than buzzwords or branding.
                    </p>
                    <br/>
                    <p>
                        <b><i>This is the early stage. The direction is clear.</i></b>
                    </p>
                </Row>
            </Container>
        </>
    )
}