import React from "react";
import "./HoverEffects.css";

const HoverEffects = () => {
  return (
    <div className="scroll-container">
      {" "}
      {/* Scrollable container */}
      <div className="box-container">
        {/* Header */}
        {/* <div>
          <a href="https://saikiran-donkana.web.app/" className="hover-link">
            CSS Hover Transformations
          </a>
        </div> */}

        {/* Hover Effects */}
        <div className="row">
          <pre>
            {`.translateX:hover { 
  transform: translateX(100px); 
}`}
          </pre>
          <div className="translateX box"></div>
        </div>

        <div className="row">
          <pre>
            {`.rotate:hover { 
  transform: rotate(45deg); 
}`}
          </pre>
          <div className="rotate box"></div>
        </div>

        <div className="row">
          <pre>
            {`.rotateY:hover { 
  transform: rotateY(45deg); 
}`}
          </pre>
          <div className="rotateY box"></div>
        </div>

        <div className="row">
          <pre>
            {`.scaleX:hover { 
  transform: scaleX(1.5); 
}`}
          </pre>
          <div className="scaleX box"></div>
        </div>

        <div className="row">
          <pre>
            {`.scaleY:hover { 
  transform: scaleY(1.5); 
}`}
          </pre>
          <div className="scaleY box"></div>
        </div>

        <div className="row">
          <pre>
            {`.skew:hover { 
  transform: skewX(10deg); 
}`}
          </pre>
          <div className="skew box"></div>
        </div>

        {/* Additional Effects */}
        <div className="row">
          <pre>
            {`.pulse:hover { 
  transform: scale(1.1); 
}`}
          </pre>
          <div className="pulse box"></div>
        </div>

        <div className="row">
          <pre>
            {`.shake:hover { 
  animation: shake 0.3s infinite; 
}`}
          </pre>
          <div className="shake box"></div>
        </div>

        <div className="row">
          <pre>
            {`.wobble:hover { 
  animation: wobble 0.5s ease-in-out; 
}`}
          </pre>
          <div className="wobble box"></div>
        </div>

        <div className="row">
          <pre>
            {`.glow:hover { 
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.8); 
}`}
          </pre>
          <div className="glow box"></div>
        </div>

        <div className="row">
          <pre>
            {`.bounce:hover { 
  animation: bounce 0.5s ease-in-out; 
}`}
          </pre>
          <div className="bounce box"></div>
        </div>

        <div className="row">
          <pre>
            {`.spin:hover { 
  transform: rotate(720deg); 
}`}
          </pre>
          <div className="spin box"></div>
        </div>

        <div className="row">
          <pre>
            {`.zoom-out:hover { 
  transform: scale(0.8); 
}`}
          </pre>
          <div className="zoom-out box"></div>
        </div>

        <div className="row">
          <pre>
            {`.border-expand:hover { 
  border-color: #ff5733; 
}`}
          </pre>
          <div className="border-expand box"></div>
        </div>

        {/* Hover Effects */}
        <div className="row">
          <pre>
            {`.blur:hover { 
  transform: blur(5px); 
}`}
          </pre>
          <div className="blur box"></div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffects;
