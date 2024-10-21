import React, { useState } from 'react';
import { Accordion, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import './BusinessPackages.css'; // Optional: Add custom styling for this component

const BusinessPackages = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });
  const [showAllPackages, setShowAllPackages] = useState(false); // State to manage package visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setShowModal(false); // Close the modal after submission
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
              <h3>{pkg.title}</h3>
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
