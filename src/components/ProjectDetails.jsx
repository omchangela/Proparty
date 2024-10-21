import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL params
import Project1Image from '../assets/property1.jpeg'; // Correct image import
import Project2Image from '../assets/property2.jpg';
import Project3Image from '../assets/property3.jpg';
import Project4Image from '../assets/property4.jpg';
import Project5Image from '../assets/property5.jpg';
import './ProjectDetails.css'; // Optional CSS file for styling
import { Button } from 'react-bootstrap';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Store the current project in state
  const [project, setProject] = useState(null);
  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to /packages on button click
  };
  // Define your projects here (you can move this to a separate file later)
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
    {
      id: 3,
      title: "Luxury Villa",
      description: "A luxury villa with a contemporary design and premium finishes.",
      image: Project3Image,
      details: "This Luxury Villa offers a breathtaking view with contemporary design and top-of-the-line premium finishes.",
      specifications: [
        "Location: Seaside",
        "Area: 5,000 sq. ft.",
        "Material: Imported marble and hardwood",
        "Completion Date: June 2025"
      ],
      challenges: "Navigating the unique geographical challenges of the site required innovative engineering solutions.",
      clientFeedback: "Absolutely stunning! We couldn't be happier with our new home.",
    },
    {
      id: 4,
      title: "Eco-Friendly House",
      description: "A sustainable house designed to minimize environmental impact.",
      image: Project4Image,
      details: "This residential building stands out with its eco-friendly features and cutting-edge design.",
      specifications: [
        "Location: Green Valley",
        "Area: 1,800 sq. ft.",
        "Material: Recycled materials and solar panels",
        "Completion Date: August 2023"
      ],
      challenges: "The biggest challenge was ensuring the energy-efficient systems worked seamlessly.",
      clientFeedback: "Our energy bills have dropped dramatically, and we love the modern design!",
    },
    {
      id: 5,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project5Image,
      details: "A modern commercial complex that offers all the amenities needed for a thriving business environment.",
      specifications: [
        "Location: Business Park",
        "Area: 30,000 sq. ft.",
        "Material: Sustainable building materials",
        "Completion Date: January 2024"
      ],
      challenges: "Balancing aesthetic appeal with functional design was a key focus throughout the project.",
      clientFeedback: "The new complex has attracted many new clients. Great job!",
    },
  ];

  // Use useEffect to update the project whenever the id changes
  useEffect(() => {
    const foundProject = projects.find((project) => project.id === parseInt(id));
    setProject(foundProject); // Update the state with the new project
  }, [id]); // Dependency on `id` to run effect whenever `id` changes

  // If no project is found, show an error message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container mb-5">
      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="underline"></div> {/* Stylish underline */}
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

        {/* Center the button horizontally */}
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
              style={{ marginLeft: '8px' }} // Add space between text and icon
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
