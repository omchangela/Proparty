import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './OurProjects.css'; // Optional CSS file for styling
import Project1Image from '../assets/property1.jpeg'; // Correct image import
import Project2Image from '../assets/property2.jpg';
import Project3Image from '../assets/property3.jpg';
import Project4Image from '../assets/property4.jpg';
import Project5Image from '../assets/property5.jpg';

const OurProjects = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const projects = [
    {
      id: 1, // Add a unique ID to each project
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project1Image
    },
    {
      id: 2,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project2Image
    },
    {
      id: 3,
      title: "Luxury Villa",
      description: "A luxury villa with a contemporary design and premium finishes.",
      image: Project3Image
    },
    {
      id: 4,
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project4Image
    },
    {
      id: 5,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project5Image
    },
  ];

  const projectsRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (projectsRef.current) {
        projectsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval); // Clean up the interval on component unmount
  }, []);

  const handleProjectClick = (id) => {
    // Navigate to the ProjectDetails page with the project ID
    navigate(`/projects/${id}`);
  };

  return (
    <div className="our-projects-container" id="project">
      <h2>
        Our Projects
        <div className="underline bg-light"></div> {/* Stylish underline */}
      </h2>
      <p>Take a look at some of the projects we've successfully completed.</p>
      <div className="projects-list" ref={projectsRef}>
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
    </div>
  );
};

export default OurProjects;
