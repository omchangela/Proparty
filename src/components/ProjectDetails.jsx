import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Project1Image from '../assets/property1.jpeg';
import Project2Image from '../assets/property2.jpg';
import Project3Image from '../assets/property3.jpg';
import Project4Image from '../assets/property4.jpg';
import Project5Image from '../assets/property5.jpg';
import './ProjectDetails.css';
import { Button } from 'react-bootstrap';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate(); // Initialize navigate

  const [project, setProject] = useState(null);
  
  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to /contact on button click
  };

  const projects = [
    {
      id: 1,
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project1Image,
      details: "This is a detailed description of the Residential Building project. It has advanced eco-friendly features and modern architecture.",
      specifications: [
        "Location: Downtown City",
        "Area: 2000 sq. ft.",
        "Material: Eco-friendly materials",
        "Completion Date: December 2023"
      ],
      challenges: "Incorporating sustainable design while adhering to city regulations was a significant challenge we overcame.",
      clientFeedback: "The team transformed our vision into reality! Highly satisfied with the outcome.",
    },
    {
      id: 2,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project2Image,
      details: "The Commercial Complex is equipped with world-class amenities and is designed for maximum efficiency and comfort.",
      specifications: [
        "Location: Central Business District",
        "Area: 50,000 sq. ft.",
        "Material: High-quality steel and glass",
        "Completion Date: March 2024"
      ],
      challenges: "Coordinating multiple contractors while maintaining the construction schedule was a significant challenge.",
      clientFeedback: "The result exceeded our expectations; our tenants are thrilled!",
    },
    // ... (other project objects)
  ];

  useEffect(() => {
    const foundProject = projects.find((project) => project.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container mb-5">
      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="underline"></div>
      </div>
      <div className="project-content">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-text">
          <p className="project-description">{project.description}</p>
          <p className="project-details">{project.details}</p>
          <h4>Specifications:</h4>
          <ul>
            {project.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <h4>Challenges:</h4>
          <p>{project.challenges}</p>
          <h4>Client Feedback:</h4>
          <p>"{project.clientFeedback}"</p>
        </div>
      </div>
      <div className="call-to-action">
        <h3 style={{ textAlign: 'center', margin: '20px' }}>Interested in Your Own Project?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            className="button-85"
            role="button"
            onClick={handleButtonClick}
            style={{
              padding: '12px',
              fontWeight: '600',
              backgroundColor: '#ff5e13',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Get in Touch{' '}
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
