import React, { useState } from 'react';
import { Accordion, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import './BusinessPackages.css'; // Optional: Add custom styling for this component

// Define backend URL based on the environment
const backendURL = import.meta.env.VITE_BACKEND_URL || 'https://backend.makemybuild.in';

const BusinessPackages = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });
  const [showAllPackages, setShowAllPackages] = useState(false); // State to manage package visibility
  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits.';
    }

    // Validate other fields
    for (const field of ['name', 'email', 'location']) {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Send form data to the backend API
    fetch(`${backendURL}/api/form-submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          location: ''
        }); // Clear form after submission
        setShowModal(false); // Close the modal
      } else {
        alert('Failed to submit the form. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    });
  };

  const packages = [
    {
      title: 'Startup Package',
      price: '₹1,800/sq.ft (Incl. GST)',
      features: [
        'Site Preparation',
        'Basic Structure',
        'Restrooms',
        'Electrical Wiring',
        'Paint Finish',
        'Flooring',
      ],
    },
    {
      title: 'Standard Package',
      price: '₹2,000/sq.ft (Incl. GST)',
      features: [
        'Site Preparation',
        'Full Structure',
        'Restrooms',
        'Electrical Wiring',
        'Interior Finishing',
        'Flooring',
      ],
    },
    {
      title: 'Luxury Package',
      price: '₹2,500/sq.ft (Incl. GST)',
      features: [
        'Site Preparation',
        'Full Structure',
        'Restrooms',
        'Electrical Wiring',
        'Custom Interior Design',
        'Premium Flooring',
      ],
    },
  ];

  return (
    <Container fluid className="business-packages-container-fluid" id='business-packages'>
      <h3 style={{textAlign:'center', fontWeight:'bold'}}>Business Construction Packages</h3>
      <h5 style={{textAlign:'center'}} className='mb-5'>Select the Best Package according to your requirement</h5>
      <Row className="packages-grid">
        {/* Show all packages on tablet and larger, one on mobile */}
        {packages.slice(0, showAllPackages || window.innerWidth >= 768 ? packages.length : 1).map((pkg, index) => (
          <Col md={4} key={index} className="package-item">
            <div style={{ backgroundColor: '#ff5e13', fontWeight: '500', borderRadius: '10px', padding: '10px 20px' }}>
              <h3 style={{color: 'white', fontWeight:'bold'}}>{pkg.title}</h3>
              <p className="price">{pkg.price}</p>
            </div>

            {/* Accordion for package details */}
            <Accordion>
              {pkg.features.map((feature, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{feature}</Accordion.Header>
                  <Accordion.Body>
                    Detailed description of {feature}.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <Button variant="light" className="mt-3 packagesbtn" onClick={() => setShowModal(true)}>
              LET'S BUILD →
            </Button>
          </Col>
        ))}
      </Row>

      {/* Show Explore More Packages button only on mobile */}
      {!showAllPackages && window.innerWidth < 768 && (
        <Button
          variant="link"
          className="explore-more"
          onClick={() => setShowAllPackages(true)}
        >
          Explore More Packages
        </Button>
      )}

      {/* Modal for the form */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Talk to Our Experts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formMobile" className="mb-3">
              <Form.Label>Mobile Number*</Form.Label>
              <Form.Control
                type="number" // Change to text to apply pattern validation
                name="mobile"
                placeholder="India +91"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="\d{10}" // Regex pattern to allow only 10 digits
              />
              {errors.mobile && <Form.Text className="text-danger">{errors.mobile}</Form.Text>}
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
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
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
              {errors.location && <Form.Text className="text-danger">{errors.location}</Form.Text>}
            </Form.Group>

            <p className="discount-text">✔️ Dussehra-BNBDSR24 applied | Upto ₹5 Lakh off</p>

            <Button variant="primary" className='mainformbtn w-100' type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default BusinessPackages;
