import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL params
import Project1Image from '../assets/project1.jpeg'; // Correct image import
import Project2Image from '../assets/project2.jpeg';
import Project3Image from '../assets/project3.jpeg';
import Project4Image from '../assets/project5.jpeg';
import Project5Image from '../assets/project4.jpeg';
import './ProjectDetails.css'; // Optional CSS file for styling

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Store the current project in state
  const [project, setProject] = useState(null);

  // Define your projects here (you can move this to a separate file later)
  const projects = [
    {
      id: 1,
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project1Image,
      details: "This is a detailed description of the Residential Building project. It has advanced eco-friendly features and modern architecture."
    },
    {
      id: 2,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project2Image,
      details: "The Commercial Complex is equipped with world-class amenities and is designed for maximum efficiency and comfort."
    },
    {
      id: 3,
      title: "Luxury Villa",
      description: "A luxury villa with a contemporary design and premium finishes.",
      image: Project3Image,
      details: "This Luxury Villa offers a breathtaking view with contemporary design and top-of-the-line premium finishes."
    },
    {
      id: 4,
      title: "Residential Building",
      description: "A modern residential building with eco-friendly features.",
      image: Project4Image,
      details: "This residential building stands out with its eco-friendly features and cutting-edge design."
    },
    {
      id: 5,
      title: "Commercial Complex",
      description: "A state-of-the-art commercial complex with all amenities.",
      image: Project5Image,
      details: "A modern commercial complex that offers all the amenities needed for a thriving business environment."
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
    <div className="project-details-container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetails;
