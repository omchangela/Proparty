import React, { useState, useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

function AdminPanel() {
  const [banners, setBanners] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch current banner images
  useEffect(() => {
    fetch('http://localhost:5050/api/banners')
      .then(response => response.json())
      .then(data => setBanners(data.banners)) // Store banners in state
      .catch(error => console.error('Error fetching banners:', error));
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

    fetch('http://localhost:5050/api/upload-banner', {
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

  // Handle banner deletion
  const handleDeleteBanner = (id) => {
    setLoading(true);
    fetch(`http://localhost:5050/api/banners/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Remove the deleted banner from the state
        setBanners(banners.filter(banner => banner._id !== id));
        alert('Banner deleted successfully!');
        setLoading(false);
      })
      .catch(error => {
        console.error('Error deleting banner:', error);
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5 bg-light p-4 rounded">
      <h1 className="text-dark text-center mb-4">Admin Panel</h1>

      {/* Banner Image Upload */}
      <h4 className="text-darl">Update Banner Image</h4>
      <Form onSubmit={handleImageUpload}>
        <Form.Group controlId="formBannerImage" className="mb-3">
          <Form.Control type="file" onChange={handleFileChange} required />
          {selectedFile && <small className="text-white mt-2">Selected: {selectedFile.name}</small>}
        </Form.Group>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Upload'}
        </Button>
      </Form>

      {/* Displaying Banners */}
      <h2 className="text-dark mt-4">Current Banners</h2>
      <div className="banner-list">
        {banners.map(banner => (
          <div key={banner._id} className="banner-item mb-3">
            <img src={`http://localhost:5050${banner.imageUrl}`} alt="Banner" style={{ maxWidth: '100%', height: 'auto' }} />
            <Button className="mt-2" variant="danger" onClick={() => handleDeleteBanner(banner._id)} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Delete'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
