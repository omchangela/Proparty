import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './projectpage.css'; // Optional CSS file for styling
import Project1Image from '../assets/property1.jpeg'; // Correct image import
import Project2Image from '../assets/property2.jpg';
import Project3Image from '../assets/property3.jpg';
import Project4Image from '../assets/property4.jpg';
import Project5Image from '../assets/property5.jpg';
import bgstyle from '../assets/hero-bg-pattern.png'; // Correct background image import

const ProjectPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const projects = [
    {
      id: 1,
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project1Image,
    },
    {
      id: 2,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project2Image,
    },
    {
      id: 3,
      title: "Luxury Villa",
      description: "A luxury villa with a contemporary design and premium finishes.",
      image: Project3Image,
    },
    {
      id: 4,
      title: "Eco-Friendly House",
      description: "A sustainable house designed to minimize environmental impact.",
      image: Project4Image,
    },
    {
      id: 5,
      title: "Modern Office Space",
      description: "An innovative office space designed for collaboration.",
      image: Project5Image,
    },
    {
      id: 6,
      title: "Luxury Apartment",
      description: "An upscale apartment featuring luxury amenities.",
      image: Project1Image,
    },
    {
      id: 7,
      title: "Retail Center",
      description: "A vibrant retail center with diverse shopping options.",
      image: Project2Image,
    },
    {
      id: 8,
      title: "Community Park",
      description: "A green space for community gatherings and events.",
      image: Project3Image,
    },
    {
      id: 9,
      title: "Renovated Warehouse",
      description: "A stylish renovation of a historic warehouse.",
      image: Project4Image,
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "The team at Brick & Bolt did an amazing job on our new office building. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Our residential project was completed ahead of schedule and exceeded our expectations.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      feedback: "Professional and reliable. We love our new commercial complex!",
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: ''
  });

  const handleProjectClick = (id) => {
    // Navigate to the ProjectDetails page with the project ID
    navigate(`/projects/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    console.log('Contact Form Data:', formData);
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: '',
      mobile: '',
      email: '',
      location: ''
    }); // Reset form after submission
  };

  return (
    <>
      <div className="projects-container" id="project">
        <h2 style={{color: '#ff5e13'}}>
          Our Projects
          <div className="underline bg-light"></div> {/* Stylish underline */}
        </h2>
        <p>Take a look at some of the projects we've successfully completed.</p>
        <div className="project-list">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-item" 
              onClick={() => handleProjectClick(project.id)} // Add click handler
              style={{ cursor: 'pointer' }} // Change cursor on hover
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
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
      <div className="container-fluid d-flex">
      
  <div className="col-6 text-center">
  <div
        className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
        style={{
          backgroundImage: `url(${bgstyle})`, // Correct syntax for background image
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
    <h1 className='text-center'>We construct your dream home.
    </h1>
    <p className='mt-5'>Track house construction project progress, raise queries, view inspection reports and more.

</p>
<p>
View packages, floor plans, design recommendations
Capture house construction progress in 3D <br />

Realtime tracking until project completion</p>
  </div>

  </div>
  <div className="col-6">

    <img src={Project5Image} alt="" style={{width: '500px'}} srcset="" />
    
  </div>
</div>
      {/* Contact Form Section */}
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
          type="tel"
          name="mobile"
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
