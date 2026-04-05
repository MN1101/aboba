import React from "react";
import "./Header.css";
import logo from "./pic/Logo1.png";
import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <div className="header-logo-section">
                <Link to="/">
                    <img src={logo} alt="A+ Smoothie Boba" className="header-logo" />
                </Link>
            </div>
            <nav className="header-nav-section">
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
                <a href="tel:+9101231234">
                    <button>Order</button>
                </a>
            </nav>
        </header>
    );
}

export default Header;