import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap';
import Logo from '../assets/logo.jpeg';
import './CustomNavbar.css'; // Import the custom CSS file for hover effect
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CustomNavbar() {
  const navigate = useNavigate(); // Initialize navigate

  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to /packages on button click
  };

  return (
    <>
      <Navbar expand="md" bg="white" variant="light">
        <Container>
          {/* Left Section: Logo */}
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: '80px', // Adjust width as needed
              }}
            />
          </Navbar.Brand>

          {/* Toggle button for smaller screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar links, wrapped in a collapse component */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Center Section: Navigation Links */}
            <Nav className="ms-auto" activeKey="/home">
            <Nav.Item>
            <Nav.Link href="/" className="custom-nav-link">
                  Home
                </Nav.Link>
            </Nav.Item>
              <Nav.Item>
              
                <Nav.Link href="/projects" className="custom-nav-link">
                  Our Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Link href="/services" className="custom-nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="/about" className="custom-nav-link">
                About Us
              </Nav.Link>
              <Nav.Item>
                <Dropdown as={Nav.Item} className="custom-dropdown">
                  <Dropdown.Toggle as={Nav.Link} className="custom-nav-link">
                    More
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#aboutus">About Us</Dropdown.Item>
                    <Dropdown.Item href="#services">Services</Dropdown.Item>
                    <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>

            {/* Right Section: Button and Phone Number */}
            <Nav className="ms-auto align-items-center">
              <Nav.Item>
                <Button
                  className="button-85"
                  role="button"
                  onClick={handleButtonClick}
                  style={{
                    marginRight: '10px',
                    padding: '12px',
                    fontWeight: '600',
                    backgroundColor: '#ff5e13',
                    border: 'none',
                    display: 'flex', // Flexbox for centering
                    alignItems: 'center', // Vertically align items
                    justifyContent: 'center', // Center both icon and text horizontally
                  }}
                >
                  Let's Build{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: '8px' }} // Add space between text and icon
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </Button>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="tel:+91 9999999999" className="phone-number">
                  <i className="fas fa-phone-alt phone-icon"></i> {/* Styled phone icon */}
                  &nbsp;+91 9999999999
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
