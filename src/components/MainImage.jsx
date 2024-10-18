import React, { useState } from 'react';
import './MainImage.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import OurServices from './OurServices';
import OurProjects from './OurProjects';
import ConstructionPackages from './ConstructionPackages';

const MainImage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });
  const [validated, setValidated] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log('Form Submitted:', formData);
      // Add your form submission logic here
    }

    setValidated(true);
  };

  return (
    <>
      <div className="main-image-container">
        {/* Dynamic Background Image fetched from the backend could be applied here */}
        
        <div className="contact-form">
          <h2>Talk to Our Expert</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide the location of your plot.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <p className="discount-text">✔️ Dussehra-BNBDSR24 applied | Upto ₹5 Lakh off</p>

            <Button variant="primary" className="mainformbtn" type="submit">
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
};

export default MainImage;
