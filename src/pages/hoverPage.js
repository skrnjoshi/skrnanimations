import "./hoverPage.css";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HoverEffects from "../components/HoverEffects";
import TypingBox from "../components/TypingBox";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const textArray = [
  "Hover Effects: CSS hover effects allow elements to change appearance when a user hovers over them.",
  "Description: These effects include transformations like translation, rotation, scaling, and skewing.",
  "TranslateX: Moves the element 100px to the right on hover.",
  "Rotate: Rotates the element by 45 degrees on hover.",
  "RotateY: Rotates the element along the Y-axis by 45 degrees.",
  "ScaleX: Stretches the element 1.5x horizontally on hover.",
  "ScaleY: Stretches the element 1.5x vertically on hover.",
  "Skew: Tilts the element by 10 degrees along the X-axis on hover.",
  "Pulse: Increases the size of the element slightly to create a pulsing effect.",
  "Shake: Creates a shaking animation effect when hovered over.",
  "Wobble: Moves the element back and forth to create a wobbling effect.",
  "Glow: Adds a glowing effect using a green box-shadow on hover.",
  "Bounce: The element bounces slightly up and down on hover.",
  "Spin: Rotates the element by 720 degrees on hover.",
  "Zoom-Out: Shrinks the element to 80% of its original size on hover.",
  "Border-Expand: Changes the border color to #ff5733 when hovered.",
  "Blur: Applies a blur effect to the element on hover, making it appear out of focus.",
];

function HoverPage() {
  const navigate = useNavigate();
  return (
    <div className="home-App">
      <div className="home-container">
        <div className="home-container-items1">
          <TypingBox textArray={textArray} />
        </div>
        <div className="home-container-items1">
          <HoverEffects />
        </div>
      </div>
      <div
        className="home-container-items2"
        onClick={() => navigate("/fresher")}
      >
        <ArrowForwardIosIcon
          style={{
            fontSize: 40,
            color: "white",
            borderRadius: "50%" /* Ensures a circular shape */,
            border: "solid white" /* Defines border color and style */,
            padding: "10px" /* Adds space inside the border */,
          }}
        />
      </div>
    </div>
  );
}

export default HoverPage;
