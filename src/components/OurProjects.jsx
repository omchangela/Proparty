import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OurProjects.css'; 
import Project1Image from '../assets/property1.jpeg'; 
import Project2Image from '../assets/property2.jpg';
import Project3Image from '../assets/property3.jpg';
import Project4Image from '../assets/property4.jpg';

const OurProjects = () => {
  const navigate = useNavigate(); 
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
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
    }
  ];

  // Scroll automatically and loop back
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (projectsRef.current) {
        const scrollWidth = projectsRef.current.scrollWidth;
        const clientWidth = projectsRef.current.clientWidth;
        const scrollLeft = projectsRef.current.scrollLeft;
        if (scrollLeft + clientWidth >= scrollWidth) {
          projectsRef.current.scrollLeft = 0; // Reset to the start
        } else {
          projectsRef.current.scrollBy({ left: 1 });
        }
      }
    }, 10); // Adjust the speed here

    return () => clearInterval(scrollInterval); 
  }, []);

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="our-projects-container" id="project">
      <h2 className="main-title">
        Our Projects
        <div className="underline bg-light"></div>
      </h2>
      <p>Take a look at some of the projects we've successfully completed.</p>
      <div className="projects-list" ref={projectsRef}>
        {projects.concat(projects).map((project, index) => (  // Duplicate items for smooth infinite scroll
          <div
            key={index}
            className="project-item"
            onClick={() => handleProjectClick(project.id)}
            style={{ cursor: 'pointer' }}
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
