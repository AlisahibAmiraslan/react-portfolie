import React from "react";
import "./service.scss";
import data from "./service-data";
import { AiFillHtml5 } from "react-icons/ai";
import { BsImages, BsWordpress, BsArrowsMove, BsGear } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";

function Service() {
  console.log(data);
  return (
    <section className="service flex pl-0 sm:pl-64 py-20 flex-col" id="service">
      <div className="title text-center">
        <h1 className="sm:text-5xl text-3xl font-extrabold mb-5">
          My Services
        </h1>
        <span className="text-sm text-gray-500">
          Services i offer to my clients
        </span>
      </div>
      <div className="my-services grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
        <div className="bg-white m-5 text-center p-10 border-2">
          <div className="icons flex justify-center">
            <AiFillHtml5 className="w-12 h-12 text-red-600" />
          </div>
          <div className="text mt-5">
            <p className="mb-5 font-bold text-xl">Hello</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi amet minus alias fugit magnam architecto?
            </p>
          </div>
        </div>
        <div className="bg-white m-5 text-center p-10 border-2">
          <div className="icons flex justify-center">
            <BsImages className="w-12 h-12 text-red-600" />
          </div>
          <div className="text mt-5">
            <p className="mb-5 font-bold text-xl">Hello</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi amet minus alias fugit magnam architecto?
            </p>
          </div>
        </div>
        <div className="bg-white m-5 text-center p-10 border-2">
          <div className="icons flex justify-center">
            <BsWordpress className="w-12 h-12 text-red-600" />
          </div>
          <div className="text mt-5">
            <p className="mb-5 font-bold text-xl">Hello</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi amet minus alias fugit magnam architecto?
            </p>
          </div>
        </div>
        <div className="bg-white m-5 text-center p-10 border-2">
          <div className="icons flex justify-center">
            <BsArrowsMove className="w-12 h-12 text-red-600" />
          </div>
          <div className="text mt-5">
            <p className="mb-5 font-bold text-xl">Hello</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi amet minus alias fugit magnam architecto?
            </p>
          </div>
        </div>
        <div className="bg-white m-5 text-center p-10 border-2">
          <div className="icons flex justify-center">
            <BsGear className="w-12 h-12 text-red-600" />
          </div>
          <div className="text mt-5">
            <p className="mb-5 font-bold text-xl">Hello</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi amet minus alias fugit magnam architecto?
            </p>
          </div>
        </div>
        <div className="bg-white m-5 text-center p-10 border-2">
          <div className="icons flex justify-center">
            <FaRocket className="w-12 h-12 text-red-600" />
          </div>
          <div className="text mt-5">
            <p className="mb-5 font-bold text-xl">Hello</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              commodi amet minus alias fugit magnam architecto?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
