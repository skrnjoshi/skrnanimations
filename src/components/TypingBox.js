import React, { useState, useEffect } from "react";
import "./TypingBox.css";

const TypingBox = ({ textArray }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < textArray.length) {
      if (charIndex < textArray[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[lineIndex] =
              (newText[lineIndex] || "") + textArray[lineIndex][charIndex];
            return newText;
          });
          setCharIndex(charIndex + 1);
        }, 25); // Typing speed

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 500); // Delay before next line
      }
    }
  }, [charIndex, lineIndex, textArray]);

  return (
    <div className="typing-box">
      {displayedText.map((line, index) => (
        <div key={index} className="typing-line">
          {line}
          {index === lineIndex && <span className="cursor">|</span>}
        </div>
      ))}
    </div>
  );
};

export default TypingBox;
