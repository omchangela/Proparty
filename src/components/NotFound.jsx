// src/components/NotFound.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops! Page Not Found.</p>
      <button className="btn btn-primary" onClick={handleRedirect}>
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFound;
