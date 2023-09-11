import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-text">The page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go Back to Home</Link>
    </div>
  );
};



export { NotFound }