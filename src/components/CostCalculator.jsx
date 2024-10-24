import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './CostCalculator.css'; // Custom styles if needed

// Define backend URL based on the environment
const backendURL = import.meta.env.VITE_BACKEND_URL || 'https://backend.makemybuild.in';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    name: '',
    location: '',
    area: '',
    carParking: '',
    balconyUtilityArea: '',
    package: 'Basic Package (Incl. GST)',
    city: 'Bengaluru'
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Reset error for the specific field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits.';
    }
    
    // Validate other fields (you can add more specific validations if needed)
    for (const field of ['name', 'location', 'area', 'carParking', 'balconyUtilityArea']) {
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
    fetch(`${backendURL}/api/cost-calculator`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        alert('Cost calculator form submitted successfully!');
        setFormData({
          mobile: '',
          name: '',
          location: '',
          area: '',
          carParking: '',
          balconyUtilityArea: '',
          package: 'Basic Package (Incl. GST)',
          city: 'Bengaluru'
        }); // Clear form after submission
      } else {
        alert('Failed to submit the form. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    });
  };

  return (
    <>
      <Container className="cost-calculator-container">
        <h2>House Construction Cost Calculator</h2>
        <p>Fill out the form below to get an estimate of house construction costs. Speak to our technical expert for a more accurate pricing.</p>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
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
            </Col>
            <Col md={6}>
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
            </Col>
          </Row>

          <Row>
            <Col md={6}>
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
            </Col>
            <Col md={6}>
              <Form.Group controlId="formArea" className="mb-3">
                <Form.Label>Super Built Up Area (sq.ft)*</Form.Label>
                <Form.Control
                  type="number"
                  name="area"
                  placeholder="Enter the built-up area in sq.ft"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
                {errors.area && <Form.Text className="text-danger">{errors.area}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formCarParking" className="mb-3">
                <Form.Label>No Of Car Parking (130 sq.ft/unit)*</Form.Label>
                <Form.Control
                  type="number"
                  name="carParking"
                  placeholder="Enter number of car parking spaces"
                  value={formData.carParking}
                  onChange={handleChange}
                  required
                />
                {errors.carParking && <Form.Text className="text-danger">{errors.carParking}</Form.Text>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBalconyUtilityArea" className="mb-3">
                <Form.Label>Balcony & Utility Area (sq.ft)*</Form.Label>
                <Form.Control
                  type="number"
                  name="balconyUtilityArea"
                  placeholder="Enter balcony and utility area in sq.ft"
                  value={formData.balconyUtilityArea}
                  onChange={handleChange}
                  required
                />
                {errors.balconyUtilityArea && <Form.Text className="text-danger">{errors.balconyUtilityArea}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formPackage" className="mb-3">
                <Form.Label>Package*</Form.Label>
                <Form.Select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                >
                  <option value="Basic Package (Incl. GST)">Basic Package (Incl. GST)</option>
                  <option value="Premium Package (Incl. GST)">Premium Package (Incl. GST)</option>
                  <option value="Luxury Package (Incl. GST)">Luxury Package (Incl. GST)</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCity" className="mb-3">
                <Form.Label>City*</Form.Label>
                <Form.Select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="Bengaluru">Andhra pradesh</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="mainformbtn w-100">
            Calculate cost
          </Button>
        </Form>

        <p className="disclaimer mt-4">
          Disclaimer: The costs indicated are approximate costs for each resource. Actual cost estimates may vary for your city. Please check with our technical expert for more accurate pricing.
        </p>
      </Container>

      <hr style={{borderTop: '2px dashed'}} />
      <Container className="container-fluid p-5" id='info-section'>
        <p>
          Are you planning to build your dream home and need to know your home construction cost estimate? Look no further! Make My Build’s House Construction Cost Calculator is here to simplify the process for you. Whether you're a professional contractor or a DIY enthusiast, our construction cost estimator gives you a clear understanding of your construction expenses by providing overall house construction cost per square foot with the breakdown of built-up cost, car parking cost, and balcony & utility cost. It will help you stay within budget and complete your project successfully.
        </p>

        <h3>Why Use a House Construction Cost Calculator Tool?</h3>
        <ul>
          <li><strong>Customizable Inputs:</strong> Our calculator allows you to enter specific details like location, area, car parking spaces, and balcony area, helping you tailor the estimate to your project needs.</li>
          <li><strong>Accurate Cost Estimation:</strong> Our calculator uses up-to-date pricing data to give accurate estimates for each section, reducing uncertainty.</li>
          <li><strong>Instant Results:</strong> Get quick results with just a few clicks, saving you time in project planning.</li>
        </ul>

        <h3>How to Use the Home Construction Cost Calculator</h3>
        <ol>
          <li>From the dropdown menu, select the city where you want to construct the building.</li>
          <li>Mention the super built-up area in sq. ft.</li>
          <li>Select the number of car parking spaces from the dropdown.</li>
          <li>Enter the balcony & utility area in sq.ft.</li>
          <li>Click "Estimate Cost" to get a detailed estimate.</li>
        </ol>

        <h4>Example of House Construction Cost Calculation</h4>
        <p>
          Let's assume the following details:
          <ul>
            <li>Location: Bengaluru (Pin Code 560072)</li>
            <li>Super built-up area: 1000 sq.ft.</li>
            <li>No. of car parking spaces: 01</li>
            <li>Balcony & utility area: 800 sq.ft.</li>
          </ul>
          Fill in these details in the calculator and click on "Estimate Cost" to get a detailed cost breakdown.
        </p>

        <h3>Why Choose Make My Build?</h3>
        <ul>
          <li><strong>Save Time:</strong> Our tool simplifies the process, saving you from manual calculations.</li>
          <li><strong>Stay on Budget:</strong> By accurately evaluating project expenses, you can ensure you don’t overspend.</li>
          <li><strong>Make Informed Decisions:</strong> Get precise cost estimates to make better decisions about prioritizing resources.</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          At Make My Build, we understand the challenges of construction projects. Our home construction cost calculator helps simplify your construction journey. Start your project with confidence by using our cost estimation tool today.
        </p>
      </Container>
      <hr style={{borderTop: '2px dashed'}} />
    </>
  );
};

export default CostCalculator;
