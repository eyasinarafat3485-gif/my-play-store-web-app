import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
        Go back to Home
      </Link>
    </div>
    );
};

export default ErrorPage;