import React, { useState, useEffect } from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';

// Define backend URL based on the environment
const backendURL = import.meta.env.VITE_BACKEND_URL || 'https://backend.makemybuild.in';

function AdminPanel() {
  const [banners, setBanners] = useState([]);
  const [costCalculatorSubmissions, setCostCalculatorSubmissions] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Pagination states
  const [currentCostPage, setCurrentCostPage] = useState(1);
  const [costItemsPerPage] = useState(5); // Number of items to show per page
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [formItemsPerPage] = useState(5); // Number of items to show per page

  // Fetch current banner images
  useEffect(() => {
    fetch(`${backendURL}/api/banner-images`)
      .then(response => response.json())
      .then(data => setBanners(data.imageUrls))
      .catch(error => console.error('Error fetching banner images:', error));
  }, []);

  // Fetch cost calculator submissions
  useEffect(() => {
    fetch(`${backendURL}/api/cost-calculator-submissions`)
      .then(response => response.json())
      .then(data => setCostCalculatorSubmissions(data))
      .catch(error => console.error('Error fetching cost calculator submissions:', error));
  }, []);

  // Fetch form submissions
  useEffect(() => {
    fetch(`${backendURL}/api/form-submissions`)
      .then(response => response.json())
      .then(data => setFormSubmissions(data))
      .catch(error => console.error('Error fetching form submissions:', error));
  }, []);

  // Handle banner image upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload!');
      return;
    }

    const formData = new FormData();
    formData.append('banner', selectedFile);
    setLoading(true);

    fetch(`${backendURL}/api/upload-banner`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setBanners(prevBanners => [...prevBanners, data]); // Add new banner to state
        alert('Banner uploaded successfully!');
        setSelectedFile(null); // Clear the file input
        setLoading(false);
      })
      .catch(error => {
        console.error('Error uploading banner image:', error);
        setLoading(false);
      });
  };

  // Delete form submission
  const handleDeleteSubmission = (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      fetch(`${backendURL}/api/form-submissions/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            setFormSubmissions(prevSubmissions => 
              prevSubmissions.filter(submission => submission._id !== id)
            );
            alert('Submission deleted successfully!');
          } else {
            alert('Failed to delete submission.');
          }
        })
        .catch(error => console.error('Error deleting submission:', error));
    }
  };

  // Calculate pagination for cost calculator submissions
  const indexOfLastCostSubmission = currentCostPage * costItemsPerPage;
  const indexOfFirstCostSubmission = indexOfLastCostSubmission - costItemsPerPage;
  const currentCostSubmissions = costCalculatorSubmissions.slice(indexOfFirstCostSubmission, indexOfLastCostSubmission);

  // Calculate pagination for form submissions
  const indexOfLastFormSubmission = currentFormPage * formItemsPerPage;
  const indexOfFirstFormSubmission = indexOfLastFormSubmission - formItemsPerPage;
  const currentFormSubmissions = formSubmissions.slice(indexOfFirstFormSubmission, indexOfLastFormSubmission);

  // Handle page change for cost calculator submissions
  const totalCostPages = Math.ceil(costCalculatorSubmissions.length / costItemsPerPage);
  
  const handleCostPageChange = (direction) => {
    setCurrentCostPage(prev => Math.min(Math.max(prev + direction, 1), totalCostPages));
  };

  // Handle page change for form submissions
  const totalFormPages = Math.ceil(formSubmissions.length / formItemsPerPage);
  
  const handleFormPageChange = (direction) => {
    setCurrentFormPage(prev => Math.min(Math.max(prev + direction, 1), totalFormPages));
  };

  return (
    <div className="container mt-5 bg-light p-4 rounded">
      <h1 className="text-dark text-center mb-4">Admin Panel</h1>

      {/* Banner Image Upload */}
      <h4 className="text-dark">Update Banner Image</h4>
      <Form onSubmit={handleImageUpload}>
        <Form.Group controlId="formBannerImage" className="mb-3">
          <Form.Control type="file" onChange={handleFileChange} required />
          {selectedFile && <small className="text-dark mt-2">Selected: {selectedFile.name}</small>}
        </Form.Group>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Upload'}
        </Button>
      </Form>

{/* Displaying Banners */}
<h2 className="text-dark mt-4">Latest Banner Images</h2>
<div className="row banner-list">
  {banners.map((imageUrl, index) => (
    <div key={index} className="col-md-4 mb-3">
      <div className="banner-item text-center"> {/* Center the text */}
        <img
          src={`${backendURL}${imageUrl}`}
          alt={`Banner ${index + 1}`}
          style={{ maxWidth: '100%', height: '300px', objectFit: 'cover' }} // Make sure images fit nicely
        />
        <span className="mt-2">Banner {index + 1}</span> {/* Display the banner number */}
      </div>
    </div>
  ))}
</div>



      {/* Displaying Cost Calculator Submissions */}
      <h2 className="text-dark mt-5">Cost Calculator Submissions</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>Area</th>
            <th>Car Parking</th>
            <th>Balcony & Utility Area</th>
            <th>Package</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {currentCostSubmissions.map((submission, index) => (
            <tr key={submission._id}>
              <td>{indexOfFirstCostSubmission + index + 1}</td>
              <td>{submission.name}</td>
              <td>{submission.mobile}</td>
              <td>{submission.location}</td>
              <td>{submission.area}</td>
              <td>{submission.carParking}</td>
              <td>{submission.balconyUtilityArea}</td>
              <td>{submission.package}</td>
              <td>{submission.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls for Cost Calculator Submissions */}
      <div className="d-flex justify-content-between">
        <Button onClick={() => handleCostPageChange(-1)} disabled={currentCostPage === 1}>Previous</Button>
        <Button onClick={() => handleCostPageChange(1)} disabled={currentCostPage === totalCostPages}>Next</Button>
      </div>
      <p className="text-center mt-2">Page {currentCostPage} of {totalCostPages}</p>

      {/* Displaying Form Submissions */}
      <h2 className="text-dark mt-4">Form Submissions</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentFormSubmissions.map((submission, index) => (
            <tr key={submission._id}>
              <td>{indexOfFirstFormSubmission + index + 1}</td>
              <td>{submission.name}</td>
              <td>{submission.mobile}</td>
              <td>{submission.email}</td>
              <td>{submission.location}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteSubmission(submission._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Controls for Form Submissions */}
      <div className="d-flex justify-content-between">
        <Button onClick={() => handleFormPageChange(-1)} disabled={currentFormPage === 1}>Previous</Button>
        <Button onClick={() => handleFormPageChange(1)} disabled={currentFormPage === totalFormPages}>Next</Button>
      </div>
      <p className="text-center mt-2">Page {currentFormPage} of {totalFormPages}</p>
    </div>
  );
}

export default AdminPanel;
