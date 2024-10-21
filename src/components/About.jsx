import React from 'react';
import './About.css'; // Import a CSS file for styles if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Project5Image from '../assets/property5.jpg';
import bgstyle from '../assets/hero-bg-pattern.png'; // Correct background image import

const About = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/packages'); // Adjust the path as needed
  };

  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={Project5Image} alt="About 1" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3" style={{color:'black'}}>Who Are We?</h2>
                <p className="lead fs-4  mb-3 " style={{color:'black'}}>
                  We began from a small team, but now we are a force of 100+ visionaries who believe in our mission.
                </p>
                <p className="mb-5" style={{color:'black'}}>
                  It all started with an idea that changed the way we look at construction today. We aim to make construction simple, transparent, and reliable.
                </p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">What We Focus On</h2>
                        <p className="text-secondary mb-0">Best & Competitive Pricing, Quality Assurance using our 470+ Quality Checks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Best Agency</h2>
                        <p className="text-secondary mb-0">No Delays - Safety mechanisms against delays, Transparent Contracts and Online Monitoring.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Div for Construction Service Highlights */}
        <div className="row mt-5">
        <div
        className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
        style={{
          backgroundImage: `url(${bgstyle})`, // Correct syntax for background image
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
          <div className="col-12 text-center">
            <h2 className="mb-4" style={{ fontWeight: 600,color:'#ff5e13' }}>Hire the Best House Construction Service</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-4 mb-3">
                <h3>7000+</h3>
                <p>Homes</p>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <h3>470+</h3>
                <p>Quality Checks</p>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <h3>100%</h3>
                <p>Safe Money Transaction</p>
              </div>
            </div>
            {/* Centered Button */}
            <div className="d-flex justify-content-center mt-4">
              <button
                className="button-85"
                role="button"
                onClick={handleButtonClick}
                style={{
                  fontWeight: '600',
                  backgroundColor: '#ff5e13',
                  border: 'none',
                  padding: '12px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Let's Build{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: '8px' }}
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </button>
            </div>

            </div>
          </div>
        </div>

        {/* New Section for Testimonials */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 style={{color:'black'}} className="mb-4">What Our Clients Say</h2>
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <div className="testimonial-card p-3 border rounded">
                  <p style={{color:'black'}}>"The team was exceptional! They transformed my ideas into reality."</p>
                  <h5>- John Doe</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="testimonial-card p-3 border rounded">
                  <p style={{color:'black'}}> "Quality workmanship and great communication. Highly recommend!"</p>
                  <h5>- Jane Smith</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="testimonial-card p-3 border rounded">
                  <p style={{color:'black'}}>"I was impressed with their professionalism and attention to detail."</p>
                  <h5>- Mark Johnson</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section for Mission, Vision, and Values */}
        <div className="row mt-5">
          <div className="col-12 text-center" >
          <div
        className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
        style={{
          backgroundImage: `url(${bgstyle})`, // Correct syntax for background image
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
            <h2  style={{color:'black'}} className="mb-4">Our Mission, Vision, and Values</h2>
            <p className="lead">Our Mission: To revolutionize the construction industry through innovative solutions and exceptional service.</p>
            <p className="lead">Our Vision: To be the most trusted and reliable construction partner for homeowners and businesses.</p>
            <p className="lead">Our Values: Integrity, Quality, Innovation, and Customer Satisfaction.</p>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
