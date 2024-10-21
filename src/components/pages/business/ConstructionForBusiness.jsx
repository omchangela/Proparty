import React from 'react';
import './ConstructionForBusiness.css'; // Optional CSS file for styling
import BannerImage from '../assets/commercial_banner.webp';
import Service1Image from '../assets/service1.webp'; // Correct image import
import Service2Image from '../assets/service2.webp'; // Correct image import
import Service3Image from '../assets/property1.jpeg'; // Correct image import
import Service4Image from '../assets/property2.jpg'; // Correct image import
import Service5Image from '../assets/property3.jpg'; // Correct image import
import Service6Image from '../assets/property4.jpg'; // Correct image import
import bgstyle from '../assets/hero-bg-pattern.png'; // Correct background image import
import BusinessPackages from './BusinessPackages';


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

      <div className="business-service-details " >
        <h3>Why Choose Us?</h3>
        <ul className="flex-list"> {/* Add a class for flex styling */}
          <li>
            <i className="fas fa-check-circle icon"></i>
            Customized solutions for various business types.
          </li>
          <li>
            <i className="fas fa-users icon"></i>
            Experienced professionals ensuring quality work.
          </li>
          <li>
            <i className="fas fa-clock icon"></i>
            On-time delivery with a focus on budget management.
          </li>
          <li>
            <i className="fas fa-comments icon"></i>
            Transparent communication throughout the project.
          </li>
        </ul>
      </div>



      {/* Our Services Section */}
      <div className="our-services-container relative" id='services'>
        <h2> Our PG Building Construction Services
        </h2>
        <p>Flawless construction powered by Make My Build</p>

        {/* Background with the correct syntax */}
        <div
          className="relative z-0 flex-wrap gap-2 md:-mt-10 flex-center-center"
          style={{
            backgroundImage: `url(${bgstyle})`, // Correct syntax for background image
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          {/* Added div with normal CSS class */}
          <div className="background-blur"></div>

          {/* Centered Services List */}
          <div className="services-list-container">
            <div className="services-list">
              <div className="service-item">
                <a href="/packages" style={{ textDecoration: 'none' }}>
                  <img src={Service1Image} alt="House Construction" className="service-image" />
                  <h3>Retail & Commercial Building
                  </h3>
                </a>
              </div>
              <div className="service-item">
                <a href="/businesspart" style={{ textDecoration: 'none' }}>
                  <img src={Service2Image} alt="Construction For Business" className="service-image" />
                  <h3>PG Building                  </h3>
                </a>
              </div>
              <div className="service-item">
                <a href="/packages" style={{ textDecoration: 'none' }}>
                  <img src={Service3Image} alt="House Construction" className="service-image" />
                  <h3>Hotel Building
                  </h3>
                </a>
              </div>
              <div className="service-item">
                <a href="/businesspart" style={{ textDecoration: 'none' }}>
                  <img src={Service4Image} alt="Construction For Business" className="service-image" />
                  <h3>Hospital Building
                  </h3>
                </a>
              </div>
              <div className="service-item">
                <a href="/packages" style={{ textDecoration: 'none' }}>
                  <img src={Service5Image} alt="House Construction" className="service-image" />
                  <h3>School Building
                  </h3>
                </a>
              </div>
              <div className="service-item">
                <a href="/businesspart" style={{ textDecoration: 'none' }}>
                  <img src={Service6Image} alt="Construction For Business" className="service-image" />
                  <h3>Construction Partners for Developers
                  </h3>
                </a>
              </div>
              {/* Additional service items */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Why Make My Build as Your Commercial Builders */}
      <div className="why-make-my-build-container">
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', }} className='mb-5'>Why Make My Build as Your Commercial Builders</h3>
        <div className="cards-container">
          <div className="card">
            {/* Quality Assurance Icon */}
            <h4> <i className="fas fa-check-circle card-icon"></i>  Quality Assurance</h4>
            <p>We implement stringent quality checks to ensure top-notch construction.</p>
          </div>
          <div className="card">
            {/* Timely Completion Icon */}
            <h4> <i className="fas fa-clock card-icon"></i> Timely Completion</h4>
            <p>We respect deadlines and ensure your project is completed on time.</p>
          </div>
          <div className="card">
            {/* Cost-Effective Solutions Icon */}
            <h4> <i className="fas fa-wallet card-icon"></i> Cost-Effective</h4>
            <p>Get the best value for your investment without compromising quality.</p>
          </div>
          <div className="card">
            {/* Expert Team Icon */}
            <h4> <i className="fas fa-users card-icon"></i> Expert Team</h4>
            <p>Our team consists of experienced professionals in the construction field.</p>
          </div>
          <div className="card">
            {/* Customer-Centric Approach Icon */}
            <h4><i className="fas fa-thumbs-up card-icon"></i> Zero Delay</h4>
            <p>We prioritize our clients and tailor solutions to their specific needs.</p>
          </div>
          <div className="card">
            {/* Transparent Communication Icon */}
            <h4><i className="fas fa-comments card-icon"></i> Transparency
            </h4>
            <p>We maintain open lines of communication throughout the project.</p>
          </div>
        </div>
      </div>
      <BusinessPackages />
    </div>
  );
};

export default ConstructionForBusiness;
