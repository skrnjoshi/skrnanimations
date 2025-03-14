import React from "react";
import "./intermediatePage.css"; // Import the CSS file

const IntermediatePage = () => {
  return (
    <div className="end-page">
      <h2>Thank You for Visiting!</h2>
      <p>We appreciate your time. Stay connected!</p>

      <div className="social-links">
        <a href="#" className="social-icon">
          Facebook
        </a>
        <a href="#" className="social-icon">
          Twitter
        </a>
        <a href="#" className="social-icon">
          Instagram
        </a>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default IntermediatePage;
