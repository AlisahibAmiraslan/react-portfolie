import React from "react";

const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="body-content">
        <h1>
          Ali <span>Aslan</span>
        </h1>
        <p>I am a Front-end Developer</p>
      </div>
      <a href="#about">
        <div className="home-mouse">
          <div className="mouse-shape">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomeContent;
