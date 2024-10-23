import React, { useState } from 'react';
import './ContactUs.css'; // Import a CSS file for styles if needed
import contactimg from '../assets/property5.jpg'; // Your contact image

import { Form, Button } from 'react-bootstrap';

// Define backend URL based on the environment
const backendURL = import.meta.env.BACKEND_URL || 'http://localhost:5020';

const ContactUs = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${backendURL}/api/form-submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.text())
      .then(data => {
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', mobile: '', email: '', location: '' }); // Clear form after submission
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };


  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={contactimg} alt="Contact Us" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
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
                type="number"
                name="mobile"
                maxLength={10}
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

            <Button
              style={{ fontWeight: '600', backgroundColor: '#ff5e13', border: 'none' }}
              className="mainformbtn w-100"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          </div>
        </div>

        {/* Address Section */}
        <div className="address-section mt-4">
          <h5>Our Address</h5>
          <p># 6-132-1, Satyadeva Nagar. Rahamath funcation hall Lane, Ballary By-pass Road, Anantapur 515001</p>
          <p>Email: info@makemybuild.com</p>
          <p>Phone: +91 8886786687</p>
        </div>

        {/* Google Map Section */}
        <div className="map-section mt-4">
          <h5>Location</h5>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8032083844305!2d77.58548618592155!3d14.667106649283506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14bcb1c5e65e7%3A0x87ab2ac468074ec4!2sRahmath%20Function%20Hall%20for%20free!5e0!3m2!1sen!2sin!4v1729583849449!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </section>
  );
};

export default ContactUs;
