import React from "react";
import Avatar from "./../../images/avatar.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar-header">
        <div className="avatar">
          <div className="avatar-image">
            <img src={Avatar} alt="Avatar İmage" />
          </div>
          <div className="avatar-content">
            <span>Ali Aslan</span>
            <p>Front-end Developer</p>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a className="menu-items" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-items" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu-items" href="/">
                Services
              </a>
            </li>
            <li>
              <a className="menu-items" href="/">
                Portfolio
              </a>
            </li>
            <li>
              <a className="menu-items" href="/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
