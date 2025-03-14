import "./hoverPage.css";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TypingBox from "../components/TypingBox";
import { useNavigate } from "react-router-dom";
import SpinnersComponent from "../components/SpinnersComponent";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const textArray = [
  "Spinner 1: A spinning circle with a blue border that rotates continuously.",
  "Spinner 2: A multi-colored spinner with different colored borders that rotate continuously.",
  "Spinner 3: A small purple circle that bounces up and down in an easing motion.",
  "Spinner 4: A green circular spinner that pulses in size to create a breathing effect.",
  "Spinner 5: A series of vertical bars that shrink and grow in a wave-like pattern.",
  "Spinner 6: A solid red square that rotates continuously in a clockwise direction.",
  "Spinner 7: A yellow circular spinner that grows and shrinks repeatedly on hover.",
  "Spinner 8: Three bouncing blue circles that move up and down in an easing motion.",
  "Spinner 9: A spinning hexagon with a gradient background that rotates continuously.",
  "Spinner 10: A circular spinner with a gradient border that rotates continuously.",
  "Spinner 11: A red square that expands and contracts in size repeatedly.",
  "Spinner 12: A polygonal spinner with a gradient fill that rotates continuously.",
  "Spinner 13: A small red circle that pulses, growing and shrinking in size.",
  "Spinner 14: A green circular spinner that moves in a zigzag motion.",
  "Spinner 15: Vertical bars that expand and contract in a wave-like animation.",
  "Spinner 16: A spinning purple circle with a constant rotation.",
  "Spinner 17: A circular spinner with a conic gradient that spins continuously.",
  "Spinner 18: A square element with rounded corners that flips on hover, creating a smooth 3D effect.",
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
          <SpinnersComponent />
        </div>
      </div>
      <div className="fresh-container-items2" onClick={() => navigate("/")}>
        <div>
          <ArrowBackIosNewIcon
            style={{
              fontSize: 40,
              color: "white",
              borderRadius: "50%" /* Ensures a circular shape */,
              border: "solid white" /* Defines border color and style */,
              padding: "10px" /* Adds space inside the border */,
            }}
          />
        </div>
        <div>
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
    </div>
  );
}

export default HoverPage;
