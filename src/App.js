import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HoverPage from "./pages/hoverPage"; // Import your Home Page
import FreshPage from "./pages/freshPage";
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<HoverPage />} /> {/* Set hoverPage as Home */}
        <Route path="/freshpage" element={<FreshPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
