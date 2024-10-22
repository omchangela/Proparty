import React from 'react';
import './OurServices.css'; // Optional CSS file for styling
import Service1Image from '../assets/service1.webp'; // Correct image import
import Service2Image from '../assets/service2.webp'; // Correct image import
import bgstyle from '../assets/hero-bg-pattern.png'; // Correct background image import

const OurServices = () => {
  return (
    <div className="our-services-container relative mb-5"  id='services'>
      
      <h2>Our Services
      <div className="underline"></div> {/* Stylish underline */}
      </h2><p>Flawless construction powered by Make My Build</p>
      
      {/* Background with the correct syntax */}
      <div
        className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
        style={{
          backgroundImage: `url(${bgstyle})`, // Correct syntax for background image
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* Added div with normal CSS class */}
        <div className="background-blur"></div>
        
        {/* Services List */}
        <div className="services-list">
          <div className="service-item">
            <a href="/packages" style={{ textDecoration: 'none' }}>
              <img src={Service1Image} alt="House Construction" className="service-image" />
              <h3>House Construction</h3>
            </a>
          </div>
          <div className="service-item">
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service2Image} alt="Construction For Business" className="service-image" />
              <h3>Construction For Business</h3>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurServices;
