import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer(): React.ReactElement {
    return (
        <Container>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">
                            FAQs
                        </a>
                    </li>
                </ul>
                <p className="text-center text-grey">
                    © 2025 Pitbox AI | Developed by <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#e91e63", textDecoration: "none" }}>Hex</a>
                </p>
            </footer>
        </Container>
    )
}
