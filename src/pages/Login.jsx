import React, { useState } from 'react';
import { Form, Button, Spinner, Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './Login.css'; // Import a CSS file for custom styles if needed

// Define backend URL based on the environment
const backendURL = import.meta.env.BACKEND_URL || 'http://localhost:5020';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is authenticated

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    // Send login request to the backend
    fetch(`${backendURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Invalid credentials. Please try again.');
      }
    })
    .then(data => {
      localStorage.setItem('token', data.token); // Store the token
      onLogin(); // Call the login function passed as props
      setIsAuthenticated(true); // Set authenticated state
    })
    .catch(error => {
      setError(error.message); // Set error message
    })
    .finally(() => {
      setLoading(false); // Set loading to false
    });
  };

  // Redirect to admin panel after successful login
  if (isAuthenticated) {
    return <Navigate to="/admin-panel" replace />;
  }

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={4} className="bg-light p-4 rounded shadow">
          <h2 className="text-center text-primary mb-4">Admin Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mb-3"
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading} className="w-100">
              {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
            </Button>
            {error && <div className="text-danger mt-2">{error}</div>} {/* Error message */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
