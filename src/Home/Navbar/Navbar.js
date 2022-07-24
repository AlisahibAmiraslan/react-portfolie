import React, { useState, useRef } from "react";
import Avatar from "./../../images/avatar.jpeg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);

  const mobilMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  var btns = document.getElementsByClassName("menu-items");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active");
      this.className += " active";
    });
  }

  return (
    <>
      <header className="lg:flex hidden justify-center items-center">
        <div className="navbar-header ">
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
                <a className="menu-items active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="menu-items" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="menu-items" href="#service">
                  Services
                </a>
              </li>
              <li>
                <a className="menu-items" href="#portfolie">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="menu-items" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="hamburger-menu w-full flex justify-start lg:hidden py-5 px-4 bg-black text-white fixed z-[100] flex-col">
        {open ? (
          <FiMenu
            className="w-7 h-7 cursor-pointer hidden"
            onClick={mobilMenu}
          />
        ) : (
          <FiMenu className="w-7 h-7 cursor-pointer" onClick={mobilMenu} />
        )}

        {open ? (
          <AiOutlineClose
            className="w-7 h-7 cursor-pointer"
            onClick={closeMenu}
          />
        ) : (
          <AiOutlineClose
            className="hidden w-7 h-7 cursor-pointer"
            onClick={closeMenu}
          />
        )}
        {open ? (
          <ul className="mobil-menu">
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
              <a className="menu-items" href="#service">
                Services
              </a>
            </li>
            <li>
              <a className="menu-items" href="#portfolie">
                Portfolio
              </a>
            </li>
            <li>
              <a className="menu-items" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        ) : (
          <ul className="mobil-menu hidden">
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
              <a className="menu-items" href="#service">
                Services
              </a>
            </li>
            <li>
              <a className="menu-items" href="#portfolie">
                Portfolio
              </a>
            </li>
            <li>
              <a className="menu-items" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
