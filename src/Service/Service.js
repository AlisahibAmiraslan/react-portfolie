import React from "react";
import "./service.scss";
import data from "./service-data";

function Service() {
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
        {data.map((data) => {
          return (
            <div
              className="bg-white m-5 text-center p-10 border-2"
              key={data.id}
            >
              <div className="icons flex justify-center text-red-600">
                {data.icon}
              </div>
              <div className="text mt-5">
                <p className="mb-5 font-bold text-xl">{data.title}</p>
                <p>{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
