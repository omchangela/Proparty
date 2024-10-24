import { useState, useEffect } from 'react';
import OurServices from './OurServices';
import OurProjects from './OurProjects';
import { Form, Button, Carousel } from 'react-bootstrap'; // Import Carousel from Bootstrap
import ConstructionPackages from './ConstructionPackages';

// Define backend URL based on the environment
const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5020';

function IndividualIntervalsExample() {
  const [bannerImages, setBannerImages] = useState([]); // Array for multiple images

  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit form data
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

  useEffect(() => {
    fetch(`${backendURL}/api/banner-images`) // Fetch three banner images
      .then(response => response.json())
      .then(data => setBannerImages(data.imageUrls)) // Save array of image URLs
      .catch(error => console.error('Error fetching banner images:', error));
  }, []);
  
  return (
    <div className="carousel-container position-relative">
      {/* Carousel for Banner Images */}
      <Carousel>
        {bannerImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={`${backendURL}${image}`} // Ensure correct path
              alt={`Banner ${index + 1}`}
              style={{ height: '500px', width: '100%', objectFit: 'cover', zIndex: 1 }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Form Overlay - Positioned on the right side */}
      <div
        className="form-overlay position-absolute p-4 d-none d-md-block"
        style={{
          top: '8%',
          right: '5%',
          transform: 'translateY(-50%)',
          zIndex: 15, // Higher than the banner image
          backgroundColor: 'white',
          borderRadius: '10px',
          width: '300px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add some shadow for depth
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

      {/* Other sections (e.g., Services, Projects, Packages) */}
      <OurServices />
      <OurProjects />
      <ConstructionPackages />
    </div>
  );
}

export default IndividualIntervalsExample;
