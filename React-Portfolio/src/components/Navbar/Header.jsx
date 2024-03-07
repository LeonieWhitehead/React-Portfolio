import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  return (
    <>
      <nav className="n-wrapper navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <div className="n-left">
          <div className="n-name">Leonie</div>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
          <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="n-list collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project-gallery" className="nav-link">
                  Project Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Portfolio</Link>
                </li>
              <li className="nav-item">Testimonials</li>
            </ul>
          </div>
          <Link to="/contact" className="button n-button">
          Contact
        </Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

