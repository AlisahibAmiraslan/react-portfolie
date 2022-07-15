import React from "react";
import "./about.scss";
import AboutImg from "./../images/about-img.jpg";
import Cv from "./cv/my-cv.pdf";

function About() {
  return (
    <div className="about flex pl-0 sm:pl-64 py-10 flex-col" id="about">
      <div className="about-content grid lg:grid-cols-2 grid-cols-1 py-10">
        <div className="about-content-img flex justify-center">
          <div className="image">
            <img src={AboutImg} alt="about-me" />
          </div>
        </div>
        <div className="about-content-text-part pt-10">
          <div className="about-content-text md:mt-0 mt-10 md:text-left text-center p-2.5">
            <span>Who am i?</span>
            <h2>I'm Ali Aslan, a Front-end Developer</h2>
            <p>
              I am a freelancer based in Istanbul and i have been building
              noteworthy UX/UI designs and websites for years, which comply with
              the latest design trends. I help convert a vision and an idea into
              meaningful and useful products. Having a sharp eye for product
              evolution helps me prioritize tasks, iterate fast and deliver
              faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-5 sm:pr-24 pr-0 p-2.5">
            <div>
              <span className="font-semibold mr-2">Name:</span> Ali Aslan
            </div>
            <div className="mt-2">
              <span className="font-semibold mr-2">Email:</span>
              <a
                href="mailto:alisahibamiraslan@gmail.com"
                className="text-red-600"
              >
                alisahibamiraslan@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <span className="font-semibold mr-2">DOB:</span> 1994
            </div>
            <div className="mt-2">
              <span className="font-semibold mr-2">From:</span> Baku, Azerbaijan
            </div>
          </div>
          <div>
            <div className="p-2.5 mt-5">
              <a
                href={Cv}
                download
                className="rounded-2xl bg-red-600 hover:bg-red-500 p-3 text-white justify-center flex items-center w-40"
              >
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
