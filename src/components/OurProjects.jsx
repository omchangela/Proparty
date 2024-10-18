import React from 'react';
import './OurProjects.css'; // Optional CSS file for styling
import Project1Image from '../assets/project1.jpeg'; // Correct image import
import Project2Image from '../assets/project2.jpeg';
import Project3Image from '../assets/project3.jpeg';
import Project4Image from '../assets/project4.jpeg';
import Project5Image from '../assets/project5.jpeg';

const OurProjects = () => {
  const projects = [
    {
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project1Image
    },
    {
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project2Image
    },
    {
      title: "Luxury Villa",
      description: "A luxury villa with a contemporary design and premium finishes.",
      image: Project3Image
    },
    {
        title: "Residential Building",
        description: "A modern residential building with eco-friendly features.",
        image: Project4Image
      },
      {
        title: "Commercial Complex",
        description: "A state-of-the-art commercial complex with all amenities.",
        image: Project5Image
      }
  ];

  return (
    <div className="our-projects-container" id='projects'>
      <h2>Our Projects</h2>
      <p>Take a look at some of the projects we've successfully completed.</p>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
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
