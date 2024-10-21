import Carousel from 'react-bootstrap/Carousel';
import { Form, Button } from 'react-bootstrap'; // Import Bootstrap Form and Button
import mainImg from '/src/assets/mainimg.png';
import OurServices from './OurServices';
import OurProjects from './OurProjects';
import ConstructionPackages from './ConstructionPackages';
import { useState } from 'react'; // Use state to handle form data

function IndividualIntervalsExample() {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formData);


  // Show success message
  alert("Thank you! We will contact you soon.");
  };

  return (
    <>
      <div className="carousel-container position-relative">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src={mainImg}
              alt="Main Image"
              className="d-block w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              src={mainImg}
              alt="Main Image"
              className="d-block w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={mainImg}
              alt="Main Image"
              className="d-block w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Form Overlay - Hidden on small screens */}
        <div
          className="form-overlay position-absolute p-4 d-none d-md-block" // Hide on small screens
          style={{
            top: '50%',
            right: '5%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'white', // Slightly transparent background
            borderRadius: '10px',
            width: '300px'
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMobile" className="mb-3">
              <Form.Label>Mobile Number*</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                placeholder="India +91"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Location of your Plot*</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="Enter your plot location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button style={{fontWeight: '600', backgroundColor: '#ff5e13', border: 'none' }} className="mainformbtn w-100 "  type="submit">
              Submit
            </Button>

          </Form>
        </div>
      </div>

      {/* Other Sections Below */}
      <OurServices />
      <OurProjects />
      <ConstructionPackages />
    </>
  );
}

export default IndividualIntervalsExample;
