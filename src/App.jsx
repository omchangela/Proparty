import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainImage from './components/MainImage';
import OurServices from './components/OurServices';
import ConstructionPackages from './components/ConstructionPackages';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated import
import About from './components/About';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import ConstructionForBusiness from './components/pages/business/ConstructionForBusiness';
import Projectpage from './components/pages/ourprojects/Projectpage';
import CostCalculator from './components/CostCalculator';
import { Modal, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login'; // Ensure you import the Login component
import Register from './pages/Register';

// Protected Route Component
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const backendURL = import.meta.env.VITE_BACKEND_URL || 'https://backend.makemybuild.in';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    
    // Send form data to the backend
    fetch(`${backendURL}/api/form-submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', mobile: '', email: '', location: '' }); // Clear form after submission
      } else {
        alert('Failed to submit the form. Please try again later.');
      }
      setShowModal(false); // Close the modal after submission
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    });
  };

   // Show the modal after 3 seconds only if it hasn't been shown before
   useEffect(() => {
    const hasShownModal = localStorage.getItem('hasShownModal');

    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem('hasShownModal', 'true'); // Set the flag in localStorage
      }, 3000);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  // Example function to handle login
  const handleLogin = () => {
    // Implement your login logic here
    setIsAuthenticated(true); // Set authenticated state
  };

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
        <Route path="/register" element={<Register />} />
        
        {/* Protected Admin Panel Route */}
        <Route path="/admin-panel" element={<ProtectedRoute element={<AdminPanel />} isAuthenticated={isAuthenticated} />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
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
