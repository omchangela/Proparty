import React, { useState } from 'react';
import './ContactUs.css'; // Import a CSS file for styles if needed
import contactimg from '../assets/property5.jpg'; // Your contact image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show the thank-you popup
    setShowPopup(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contact-section py-5"  style={{ backgroundColor:'white'}}>
      <div className="container">
        <h2 className="text-center mb-4" style={{color:'#ff5e13'}}>Contact Us</h2>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={contactimg} alt="Contact Us" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            
            <form onSubmit={handleSubmit} className="mt-4 mx-5">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Thank You!</h4>
            <p>Thank you for contacting us. We will reach out to you soon.</p>
            <button onClick={closePopup} className="btn" style={{backgroundColor:'#ff5e13', color:'white'}}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
