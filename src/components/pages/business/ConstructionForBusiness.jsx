import React from 'react';
import './ConstructionForBusiness.css'; // Optional CSS file for styling
import BannerImage from '../assets/commercial_banner.webp';
import Service1Image from '../assets/service1.webp'; 
import Service2Image from '../assets/service2.webp'; 
import Service3Image from '../assets/property1.jpeg'; 
import Service4Image from '../assets/property2.jpg'; 
import Service5Image from '../assets/property3.jpg'; 
import Service6Image from '../assets/property4.jpg'; 
import bgstyle from '../assets/hero-bg-pattern.png'; 
import BusinessPackages from './BusinessPackages';

const ConstructionForBusiness = () => {
  return (
    <div className="construction-for-business-container-fluid">
      {/* Banner Image with Text Overlay */}
      <div className="banner-image slide-up" style={{
        backgroundImage: `url(${BannerImage})`,
        height: '500px',
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        <div className="banner-text z-15 fade-in">
          <h2>Commercial Building Design & Construction Services</h2>
          <p>Looking to build a building? We are your trusted partner for commercial construction projects, from design to completion. We specialize in building commercial buildings, offering expertise in construction </p>
        </div>
      </div>

      <div className="business-service-details">
        <h3 className="fade-in">Why Choose Us?</h3>
        <ul className="flex-list">
          <li className="fade-in">
            <i className="fas fa-check-circle icon"></i>
            Customized solutions for various business types.
          </li>
          <li className="fade-in">
            <i className="fas fa-users icon"></i>
            Experienced professionals ensuring quality work.
          </li>
          <li className="fade-in">
            <i className="fas fa-clock icon"></i>
            On-time delivery with a focus on budget management.
          </li>
          <li className="fade-in">
            <i className="fas fa-comments icon"></i>
            Transparent communication throughout the project.
          </li>
        </ul>
      </div>

      {/* Our Services Section */}
      <div className="our-services-container relative slide-up" id='services'>
        <h2> Our PG Building Construction Services</h2>
        <p>Flawless construction powered by Make My Build</p>

        <div
          className="relative z-0 flex-wrap gap-2 md:-mt-10 flex-center-center"
          style={{
            backgroundImage: `url(${bgstyle})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="background-blur"></div>
          <div className="services-list-container">
            <div className="services-list">
              {[
                { image: Service1Image, title: 'Retail & Commercial Building', link: '/packages' },
                { image: Service2Image, title: 'PG Building', link: '/businesspart' },
                { image: Service3Image, title: 'Hotel Building', link: '/packages' },
                { image: Service4Image, title: 'Hospital Building', link: '/businesspart' },
                { image: Service5Image, title: 'School Building', link: '/packages' },
                { image: Service6Image, title: 'Construction Partners for Developers', link: '/businesspart' },
              ].map((service, index) => (
                <div className="service-item zoom-in" key={index}>
                  <a href={service.link} style={{ textDecoration: 'none' }}>
                    <img src={service.image} alt={service.title} className="service-image" />
                    <h3>{service.title}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Why Make My Build as Your Commercial Builders */}
      <div className="why-make-my-build-container">
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', }} className='mb-5 fade-in'>Why Make My Build as Your Commercial Builders</h3>
        <div className="cards-container">
          {[
            { title: 'Quality Assurance', description: 'We implement stringent quality checks to ensure top-notch construction.', icon: 'fas fa-check-circle' },
            { title: 'Timely Completion', description: 'We respect deadlines and ensure your project is completed on time.', icon: 'fas fa-clock' },
            { title: 'Cost-Effective Solutions', description: 'Get the best value for your investment without compromising quality.', icon: 'fas fa-wallet' },
            { title: 'Expert Team', description: 'Our team consists of experienced professionals in the construction field.', icon: 'fas fa-users' },
            { title: 'Zero Delay', description: 'We prioritize our clients and tailor solutions to their specific needs.', icon: 'fas fa-thumbs-up' },
            { title: 'Transparency', description: 'We maintain open lines of communication throughout the project.', icon: 'fas fa-comments' },
          ].map((card, index) => (
            <div className="card fade-in" key={index}>
              <h4> <i className={card.icon + " card-icon"}></i> {card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <BusinessPackages />
    </div>
  );
};

export default ConstructionForBusiness;
