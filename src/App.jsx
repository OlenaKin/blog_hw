// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import your Header component
import Home from "./pages/Home/Home"; // Import your Home component
import News from "./pages/News/News"; // Import your News component
import Contact from "./pages/Contact/Contact"; // Import your Contact component

import "./App.css"; // Add some CSS for layout styling

function App() {
  return (
    <Router>
      <Header blogName="My Blog" />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default page */}
          <Route path="/news" element={<News />} /> {/* News page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
