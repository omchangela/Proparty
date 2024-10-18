import React, { useState } from 'react';
import './MainImage.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const MainImage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="main-image-container">
      <img src="../assets/mainImg.png" alt="Main" className="main-image" />

      <div className="contact-form">
        <h2>Talk to Our Expert</h2>
        <Form onSubmit={handleSubmit}>
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
  );
};

export default MainImage;
