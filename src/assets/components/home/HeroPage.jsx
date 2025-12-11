import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../imgs/logo.png';

export default function HeroPage() {
    return (
        <Container>
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col xs="auto" className="text-center">
                    <img
                        id="main-logo"
                        src={logo}
                        alt="PITBOX AI LOGO"
                        width={screen.availWidth * 0.167}
                        height={screen.availWidth * 0.167}
                    />
                    <h1>Get the perfect car setup - powered by AI</h1>
                    <h5>Upload your setup, tell us what's wrong, and let Pitbox AI fix it for you.</h5>

                    <button
                        id="improve-btn"
                        className="my-4 fs-4 text-white"
                        onClick={() => {
                            const targetDiv = document.getElementById("how-it-works-section");
                            if (targetDiv) {
                                targetDiv.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        style={{ backgroundColor: "#e91e63", border: "none", borderRadius: "0.67vh" }}
                        onMouseEnter={e => { e.target.style.fontWeight = 'bold'; }}
                        onMouseLeave={e => { e.target.style.fontWeight = 'normal'; }}
                    >
                        ⬇️Find Out More⬇️
                    </button>
                </Col>
            </Row>
        </Container>
    );
}