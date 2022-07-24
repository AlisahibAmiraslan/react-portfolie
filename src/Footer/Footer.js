import React from "react";
import "./footer.scss";
import {
  BsMapFill,
  BsFillTelephoneFill,
  BsGithub,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="footer flex pl-0 lg:pl-64 py-20 bg-black flex-col">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full">
          <div className="flex justify-center items-center flex-col mb-10 sm:mb-0">
            <BsMapFill className="w-10 h-10 text-red-600 mb-5" />
            <a
              href="https://www.google.com/maps/place/Maltepe%2F%C4%B0stanbul/@40.9439118,29.1205241,13z/data=!3m1!4b1!4m5!3m4!1s0x14cac4336e39827f:0x608e0ae971e8ddc2!8m2!3d40.9497961!4d29.1739439"
              target="_blank"
              className="text-gray-400"
            >
              Istanbul, Türkiye.
            </a>
          </div>
          <div className="flex justify-center items-center flex-col mb-10 sm:mb-0">
            <BsFillTelephoneFill className="w-10 h-10 text-red-600 mb-5" />
            <a
              href="tel:+905525262372"
              target="_blank"
              className="text-gray-400"
            >
              (+90) 552-526-2372
            </a>
          </div>
          <div className="flex justify-center items-center flex-col mb-10 sm:mb-0">
            <RiSendPlaneFill className="w-10 h-10 text-red-600 mb-5" />
            <a
              href="mailto:alisahibamiraslan@gmail.com"
              className="text-gray-400"
            >
              alsiahibamiraslan@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="copyright pl-0 lg:pl-64 pb-7 text-white text-center bg-black flex sm:justify-between justify-center sm:flex-row flex-col items-center px-5">
        <div className="icons flex gap-5 sm:justify-start justify-center">
          <a href="https://github.com/AlisahibAmiraslan">
            <BsGithub className="w-6 h-6" />
          </a>
          <a href="/">
            <BsInstagram className="w-6 h-6 text-red-800" />
          </a>
          <a href="/">
            <BsFacebook className="w-6 h-6 text-blue-600" />
          </a>
        </div>
        <p className="sm:mt-0 mt-10">Copyright © 2022, all rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
