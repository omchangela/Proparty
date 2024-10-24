import React, { useState, useEffect } from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';

// Define backend URL based on the environment
const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5020';

function AdminPanel() {
  const [banners, setBanners] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]); // Array for multiple images

  // Fetch current banner images
  useEffect(() => {
    fetch(`${backendURL}/api/banners`)
      .then(response => response.json())
      .then(data => setBanners(data.banners)) // Store banners in state
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  // Fetch form submissions
  useEffect(() => {
    fetch(`${backendURL}/api/form-submissions`)
      .then(response => response.json())
      .then(data => setFormSubmissions(data))
      .catch(error => console.error('Error fetching form submissions:', error));
  }, []);

  useEffect(() => {
    fetch(`${backendURL}/api/banner-images`) // Fetch three banner images
      .then(response => response.json())
      .then(data => setBannerImages(data.imageUrls)) // Save array of image URLs
      .catch(error => console.error('Error fetching banner images:', error));
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
      <h2 className="text-dark mt-4">Selected Banners</h2>
      <div className="banner-list">
        {banners.map(banner => (
          <div key={banner._id} className="banner-item mb-3">
            <img src={`${backendURL}${banner.imageUrl}`} alt="Banner" style={{ maxWidth: '100%', height: '300px' }} />
          </div>
        ))}
      </div>

      <h2 style={{ color: 'black', marginTop: '20vh' }}>Currently Present Banners</h2>
      <div className="banner-images row">
        {bannerImages.slice(0, 3).map((image, index) => (
          <div key={index} className="col-md-4 mb-3">
            <img
              src={`${backendURL}${image}`} // Ensure correct path
              alt={`Banner ${index + 1}`}
              style={{ height: '300px', width: '100%', objectFit: 'cover', zIndex: 1 }}
            />
          </div>
        ))}
      </div>

      {/* Displaying Form Submissions */}
      <h2 className="text-dark mt-4">Form Submissions</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th> {/* Sequential ID column */}
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Location</th>
            <th>Action</th> {/* Action column for delete button */}
          </tr>
        </thead>
        <tbody>
          {formSubmissions.map((submission, index) => (
            <tr key={submission._id}> {/* Using MongoDB ID as key for uniqueness */}
              <td>{index + 1}</td> {/* Sequential number */}
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
    </div>
  );
}

export default AdminPanel;
