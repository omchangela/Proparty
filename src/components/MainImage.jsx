
import { Form, Button } from 'react-bootstrap'; // Import Bootstrap Form and Button
import mainImg from '/src/assets/commercial_banner.webp';
import OurServices from './OurServices';
import OurProjects from './OurProjects';
import ConstructionPackages from './ConstructionPackages';
import { useState } from 'react'; // Use state to handle form data
import BannerImage from '../assets/commercial_banner.webp';


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
      <div className="banner-image" style={{
        backgroundImage: `url(${BannerImage})`,
        height: '500px',
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Set position to relative for text positioning
      }}>
        <div className="banner-text z-15">
        </div>
      </div>

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
