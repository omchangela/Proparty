import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './projectpage.css'; 
import Project1Image from '../assets/property1.jpeg'; 
import Project2Image from '../assets/property2.jpg';
import Project3Image from '../assets/property3.jpg';
import Project4Image from '../assets/property4.jpg';
import Project5Image from '../assets/property5.jpg';
import bgstyle from '../assets/hero-bg-pattern.png'; 

// Define backend URL based on the environment
const backendURL = import.meta.env.VITE_BACKEND_URL || 'https://backend.makemybuild.in';

const ProjectPage = () => {
  const navigate = useNavigate(); 

  const projects = [
    { id: 1, title: "Residential Building", description: "A modern residential building with eco-friendly features.", image: Project1Image },
    { id: 2, title: "Commercial Complex", description: "A state-of-the-art commercial complex with all amenities.", image: Project2Image },
    { id: 3, title: "Luxury Villa", description: "A luxury villa with a contemporary design and premium finishes.", image: Project3Image },
    { id: 4, title: "Eco-Friendly House", description: "A sustainable house designed to minimize environmental impact.", image: Project4Image },
    { id: 5, title: "Modern Office Space", description: "An innovative office space designed for collaboration.", image: Project5Image },
    { id: 6, title: "Luxury Apartment", description: "An upscale apartment featuring luxury amenities.", image: Project1Image },
    { id: 7, title: "Retail Center", description: "A vibrant retail center with diverse shopping options.", image: Project2Image },
    { id: 8, title: "Community Park", description: "A green space for community gatherings and events.", image: Project3Image },
    { id: 9, title: "Renovated Warehouse", description: "A stylish renovation of a historic warehouse.", image: Project4Image }
  ];

  const testimonials = [
    { id: 1, name: "John Doe", feedback: "The team at Brick & Bolt did an amazing job on our new office building. Highly recommend!" },
    { id: 2, name: "Jane Smith", feedback: "Our residential project was completed ahead of schedule and exceeded our expectations." },
    { id: 3, name: "Alice Johnson", feedback: "Professional and reliable. We love our new commercial complex!" },
  ];

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/form-submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Success:', data);
      alert("There was an error submitting your form. Please try again later.");
    } catch (error) {
      console.error('Error:', error);
      alert("Thank you! We will contact you soon.");
    } finally {
      setFormData({
        name: '',
        mobile: '',
        email: '',
        location: ''
      });
    }
  };
  
  return (
    <>
      <div className="projectpage-container" id="projectpage">
        <h2 style={{color: '#ff5e13'}}>
          Our Projects
          <div className="underline bg-light"></div> 
        </h2>
        <p>Take a look at some of the projects we've successfully completed.</p>
        <div className="projectpage-list">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="projectpage-item" 
              onClick={() => handleProjectClick(project.id)} 
              style={{ cursor: 'pointer' }} 
            >
              <img src={project.image} alt={project.title} className="projectpage-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <h3>What Our Clients Say</h3>
          <div className="testimonials-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 text-center p-4">
            <div
              className="relative z-0 flex-wrap"
              style={{
                backgroundImage: `url(${bgstyle})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <h1 className="text-center">We construct your dream home.</h1>
              <p className="mt-3">Track house construction project progress, raise queries, view inspection reports and more.</p>
              <p>View packages, floor plans, design recommendations. Capture house construction progress in 3D <br /> Realtime tracking until project completion</p>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={Project5Image} alt="Construction Project" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="contact-form-container mt-5 mb-5">
        <h3>Contact Us</h3>
        <p>If you have any inquiries or would like to discuss a project, please fill out the form below:</p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name*</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile Number*</label>
              <input
                type="number"
                name="mobile"
                maxLength={10}
                className="form-control"
                placeholder="India +91"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email*</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location of your Plot*</label>
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="Enter your plot location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
