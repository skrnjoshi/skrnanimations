import React from "react";
import "./SpinnersComponent.css";

const SpinnersComponent = () => {
  return (
    <div className="spinner-scroll-container">
      {" "}
      <div className="spinners-page">
        <div className="spinner-container">
          <div className="row">
            <pre>{`.spinner-1 {
  width: 40px;
  height: 40px;
  border: 5px solid #3498db;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`}</pre>
            <div className="spinner spinner-1"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-2 {
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top: 5px solid #e74c3c;
  border-right: 5px solid #f1c40f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`}</pre>
            <div className="spinner spinner-2"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-3 {
  width: 10px;
  height: 10px;
  background-color: #8e44ad;
  border-radius: 50%;
  animation: bounce 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-3"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-4 {
  width: 50px;
  height: 50px;
  border: 3px solid #2ecc71;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-4"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-5 {
  display: flex;
  gap: 5px;
}

.spinner-5 div {
  width: 5px;
  height: 20px;
  background-color: #ff5733;
  animation: bars 1.2s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-5">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="row">
            <pre>{`.spinner-6 {
  width: 40px;
  height: 40px;
  background-color: #ff4757;
  animation: rotateSquare 1.5s infinite linear;
}`}</pre>
            <div className="spinner spinner-6"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-7 {
  width: 40px;
  height: 40px;
  background-color: #f39c12;
  border-radius: 50%;
  animation: growShrink 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-7"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-8 {
  display: flex;
  gap: 5px;
}

.spinner-8 div {
  width: 10px;
  height: 10px;
  background-color: #2980b9;
  border-radius: 50%;
  animation: bounce 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-8">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="row">
            <pre>{`.spinner-9 {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #00ffcc, #0099ff);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: spin 1.5s infinite linear;
}`}</pre>
            <div className="spinner spinner-9"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-10 {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 165, 0, 0.3);
  border-top-color: #ffa500;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`}</pre>
            <div className="spinner spinner-10"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-11 {
  width: 40px;
  height: 40px;
  border: 4px solid #ff4757;
  position: relative;
  animation: expandSquare 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-11"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-12 {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff00ff, #ff9900);
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: spin 2s infinite linear;
}`}</pre>
            <div className="spinner spinner-12"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-13 {
  width: 15px;
  height: 15px;
  background-color: #e74c3c;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-13"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-14 {
  width: 40px;
  height: 40px;
  border: 4px solid #27ae60;
  border-radius: 50%;
  animation: zigZag 1.5s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-14"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-15 {
  display: flex;
  gap: 5px;
}

.spinner-15 div {
  width: 8px;
  height: 30px;
  background-color: #1abc9c;
  animation: wave 1.2s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-15">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="row">
            <pre>{`.spinner-16 {
  width: 40px;
  height: 40px;
  background-color: #9b59b6;
  border-radius: 50%;
  position: relative;
  animation: spin 2s infinite linear;
}`}</pre>
            <div className="spinner spinner-16"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-17 {
  width: 40px;
  height: 40px;
  background: conic-gradient(#3498db, #f1c40f, #e74c3c, #2ecc71, #3498db);
  border-radius: 50%;
  animation: spin 2s infinite linear;
}`}</pre>
            <div className="spinner spinner-17"></div>
          </div>

          <div className="row">
            <pre>{`.spinner-18 {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #16a085;
  animation: flip 2s infinite ease-in-out;
}`}</pre>
            <div className="spinner spinner-18"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnersComponent;
