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
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
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

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Thank You!</h4>
            <p>Thank you for contacting us. We will reach out to you soon.</p>
            <button onClick={closePopup} className="btn">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
