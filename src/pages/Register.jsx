import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false); // Track if user is registered

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true); // Set loading to true

    // Send registration request to the backend
    fetch('https://property-backend-arqx.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (response.ok) {
        setIsRegistered(true); // Set registered state
      } else {
        throw new Error('Registration failed. Please try again.');
      }
    })
    .catch(error => {
      setError(error.message); // Set error message
    })
    .finally(() => {
      setLoading(false); // Set loading to false
    });
  };

  // Redirect to admin panel after successful registration
  if (isRegistered) {
    return <Navigate to="/admin-panel" replace />;
  }

  return (
    <div className="register-container">
      <h2>Admin Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
        </Button>
        {error && <div className="text-danger mt-2">{error}</div>} {/* Error message */}
      </Form>
    </div>
  );
};

export default Register;
