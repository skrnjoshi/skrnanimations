import React from "react";
import "./Effects.css";

const Effects = () => {
  return (
    <div className="effects-container">
      <p>Hello</p>

      {/* Glassmorphism Card */}
      <div className="glass">Glassmorphism Effect</div>

      {/* Neon Glow Button */}
      <button className="neon-button">Click Me</button>

      {/* 3D Button */}
      <button className="button-3d">Press Me</button>

      {/* Gradient Background Animation */}
      <div className="animated-bg"></div>

      {/* Floating Card */}
      <div className="card">Hover Me</div>
    </div>
  );
};

export default Effects;
