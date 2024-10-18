import React from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import Logo from '../assets/MAKEMYBUILD1.png'; // Assuming the logo is this file
import './CustomNavbar.css'; // Import the CSS file for dropdown hover effect

const CustomNavbar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                {/* Logo section */}
                <Navbar.Brand href="#">
                    <img
                        src={Logo}
                        alt="logo"
                        style={{ width: '100px', height: '100px' }} // Adjusted width and height
                    />
                </Navbar.Brand>

                {/* Toggle button for mobile view */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

                {/* Links section */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Aligns nav to the right */}
                        <Nav.Link href="#projects">Our Projects</Nav.Link>
                        <Nav.Link href="#floorplans">Floor Plans</Nav.Link>
                        <Nav.Link href="#costestimator">Cost Estimator</Nav.Link>
                        <Nav.Link href="#howitworks">How it Works</Nav.Link>

                        {/* Dropdown for More */}
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                More
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#aboutus">About Us</Dropdown.Item>
                                <Dropdown.Item href="#services">Services</Dropdown.Item>
                                <Dropdown.Item href="#contact">Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button href='#packages' className="button-29" role="button">LET'S BUILD</Button>

                        {/* Vertical line icon */}
                        <span className="vertical-line"></span> {/* Vertical line between links and phone number */}
                        
                        {/* Phone number section */}
                        <Nav.Link href="tel:+91 9999999999" className="phone-number">
                            <i className="fas fa-phone-alt phone-icon"></i> {/* Styled phone icon */}
                            &nbsp;+91 9999999999
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
