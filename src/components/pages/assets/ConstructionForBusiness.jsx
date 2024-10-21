import React from 'react';
import './ConstructionForBusiness.css'; // Optional CSS file for styling
import BannerImage from '../../../ssets/commercial_banner.webp'; 
import Service1Image from '../../../assets/service1.webp'; // Correct image import
import Service2Image from '../../../assets/service2.webp'; // Correct image import
import bgstyle from '../../../assets/hero-bg-pattern.png'; // Correct background image import

const ConstructionForBusiness = () => {
  return (
    <div className="construction-for-business-container-fluid">
      {/* Banner Image with Text Overlay */}
      <div className="banner-image" style={{ 
        backgroundImage: `url(${BannerImage})`, 
        height: '500px', 
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Set position to relative for text positioning
      }}>
        <div className="banner-text z-15">
          <h2>Commercial Building Design & Construction Services</h2>
          <p>Looking to build a commercial building? Brick &amp; Bolt is your trusted partner for commercial construction projects, from design to completion. We specialize in building commercial buildings, offering expertise in design, construction, and project management.</p>
        </div>
      </div>

      {/* Business service details */}
      <div className="business-service-details" style={{textAlign:'center', textDecoration:'none', listStyleType:'none'}}>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Customized solutions for various business types.</li>
          <li>Experienced professionals ensuring quality work.</li>
          <li>On-time delivery with a focus on budget management.</li>
          <li>Transparent communication throughout the project.</li>
        </ul>
      </div>

   <div className="our-services-container relative" id='services'>
      
      <h2> Our PG Building Construction Services

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
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service1Image} alt="House Construction" className="service-image" />
              <h3>Retail & Commercial Building
              </h3>
            </a>
          </div>
          <div className="service-item">
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service2Image} alt="Construction For Business" className="service-image" />
              <h3>PG Building
              </h3>
            </a>
          </div>
          <div className="service-item">
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service1Image} alt="House Construction" className="service-image" />
              <h3>Hotel Building
              </h3>
            </a>
          </div>
          <div className="service-item">
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service2Image} alt="Construction For Business" className="service-image" />
              <h3>Construction Partners for Developers
              </h3>
            </a>
          </div>
          <div className="service-item">
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service1Image} alt="House Construction" className="service-image" />
              <h3>Hospital Building
              </h3>
            </a>
          </div>
          <div className="service-item">
            <a href="/businesspart" style={{ textDecoration: 'none' }}>
              <img src={Service2Image} alt="Construction For Business" className="service-image" />
              <h3>School Building
              </h3>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  
    </div>
  );
};

export default ConstructionForBusiness;
