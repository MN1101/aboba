import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./pic/Logo1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <img src={logo} alt="A+ Smoothie Boba" className="footer-logo" />
      </div>

      <div className="footer-nav-section">
        <div className="hour">
          <h3>Business Hours</h3>
          <p>SUN - WED: 9:30AM - 9:00PM</p>
          <p>THU - SAT: 9:30AM - 10:00PM</p>
        </div>
        <div className="left-col">
          <h3>Navigate</h3>
          <nav className="nav-footer">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <a
              href="https://www.google.com/maps/place/A%2B+Smoothie+Bubble+Tea/@34.0357858,-77.896583,17z/data=!3m1!4b1!4m6!3m5!1s0x89a9f9455decbe77:0x4c044aaeeca5f1b7!8m2!3d34.0357858!4d-77.8940081!16s%2Fg%2F11jcl60r92?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              Location
            </a>
          </nav>
        </div>

        <div className="right-col">
          <h3>Connect</h3>
          <nav className="nav-footer">
            <a
              href="https://www.instagram.com/aplusboba/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="tel:+9101231234">Phone</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;