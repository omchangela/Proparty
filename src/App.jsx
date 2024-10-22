import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainImage from './components/MainImage';
import OurServices from './components/OurServices';
// import OurProjects from './components/OurProjects';
import ConstructionPackages from './components/ConstructionPackages';
import ProjectDetails from './components/ProjectDetails'; // Ensure you import this component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import ConstructionForBusiness from './components/pages/business/ConstructionForBusiness';
import Projectpage from './components/pages/ourprojects/Projectpage'
import CostCalculator from './components/CostCalculator';
import { Modal, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    setShowModal(false); // Close the modal after submission
  };

  // Show the modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<MainImage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/packages" element={<ConstructionPackages />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/businesspart" element={<ConstructionForBusiness />} />
        <Route path="/cost-estimator" element={<CostCalculator />} />
      </Routes>
      <Footer />

      {/* Modal Form */}
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

            <Button variant="primary" className='mainformbtn' type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Router>
  );
}

export default App;
