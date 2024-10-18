import React from 'react';
import './OurServices.css'; // Optional CSS file for styling
import Service1Image from '../assets/service1.webp'; // Import first image
import Service2Image from '../assets/service2.webp'; // Import second image

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h2>Our Services</h2>
      <p>Flawless construction powered by Make My Build</p>
      <div className="services-list">
        <div className="service-item">
            <a href="" style={{textDecoration:'none'}}>
          <img src={Service1Image} alt="Service 1" className="service-image" /> {/* Service 1 Image */}
          <h3>House Construction</h3>
          </a></div>
        <div className="service-item">
        <a href='' style={{textDecoration:'none'}}>
          <img src={Service2Image} alt="Service 2" className="service-image" /> {/* Service 2 Image */}
          <h3>Construction For Business</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
