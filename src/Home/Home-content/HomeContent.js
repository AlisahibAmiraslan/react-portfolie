import React, { useRef, useEffect } from "react";

const HomeContent = () => {
  useEffect(() => {
    let text = "Front-end Developer";
    let myJob = document.querySelector(".profession");
    let index = 0;
    function textWrite() {
      myJob.innerHTML = text.slice(0, index);
      index++;
      if (index > text.length) {
        index = 0;
      }
    }
    setInterval(textWrite, 200);
  }, []);

  return (
    <div className="home-content">
      <div className="body-content">
        <h1>
          Ali <span>Aslanov</span>
        </h1>
        <p>
          I am a <span className="profession"></span>
        </p>
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
