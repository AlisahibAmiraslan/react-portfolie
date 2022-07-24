import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import "./portfolio.scss";
import classNames from "../enums/Classnames";
import { data } from "./data";
import { AiOutlineClose } from "react-icons/ai";
import Img from "./../images/item-1.jpg";

const customStyles = {
  content: {
    width: "90%",
    position: "relative",
    border: "none",
    overflow: "hidden",
  },
};

Modal.setAppElement(document.getElementById("root"));

function Portfolio() {
  const [portfolies, setPortfolies] = useState(data);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-full pl-0 sm:pl-64">
      <div className="title flex pt-20 flex-col text-center">
        <h1 className="sm:text-5xl text-2xl font-extrabold" id="portfolie">
          Portfolio
        </h1>
        <p className="text-gray-400 mt-3">Showcasing some of my best work</p>
      </div>

      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 w-80">
            {Object.keys(portfolies).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "py-2.5 pr-3 text-sm font-bold",
                    "focus:outline-none",
                    selected ? "text-red-600" : "hover:text-red-600"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(portfolies).map((posts, idx) => (
              <Tab.Panel key={idx}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 sm:pr-10 pr-0">
                  {posts.map((post) => (
                    <div key={post.id} className="portfolie-img relative">
                      <img src={post.img} alt={post.title} />
                      <div>
                        <a className="absolute top-0 left-0 flex justify-center items-center flex-col portfolie-link">
                          <h3 className="mb-4">{post.content}</h3>
                          <button className="text-sm" onClick={openModal}>
                            More Info
                          </button>
                        </a>
                        <div className="flex justify-center items-center">
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                          >
                            <AiOutlineClose
                              onClick={closeModal}
                              className="cursor-pointer absolute right-0 top-2 z-50 w-10 h-10"
                            />
                            <div className=" sm:pl-52 pl:0 max-w-7xl m-auto">
                              <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
                                <div>
                                  <img src={Img} alt="" />
                                </div>
                                <div className="about-content-text-part">
                                  <div className="about-content-text md:text-left text-center">
                                    <h2 className="font-extrabold text-4xl mb-10">
                                      {post.content}
                                    </h2>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Assumenda aut sapiente
                                      quo explicabo, quasi incidunt aperiam
                                      laudantium, nemo cum eaque inventore ut
                                      voluptas voluptatibus nihil! Amet soluta,
                                      ea illo sint? Lorem ipsum dolor sit amet,
                                      consectetur adipisicing elit. Obcaecati
                                      dignissimos culpa deserunt aspernatur ipsa
                                      veritatis alias labore tempore laboriosam
                                      commodi! Ab neque sunt, odio voluptatibus,
                                      dignissimos nisi consequuntur atque qui
                                      explicabo eligendi, harum in?
                                    </p>
                                  </div>
                                  <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
                                    <div>
                                      <span className="font-semibold mr-2">
                                        Client:
                                      </span>
                                      Envato
                                    </div>
                                    <div className="mt-2">
                                      <span className="font-semibold mr-2">
                                        Categories:
                                      </span>
                                      <a href="/" className="text-red-600">
                                        Branding, Web Design
                                      </a>
                                    </div>
                                    <div className="mt-2">
                                      <span className="font-semibold mr-2">
                                        Date:
                                      </span>
                                      12 May, 2019
                                    </div>
                                    <div className="mt-2">
                                      <span className="font-semibold mr-2">
                                        Technologies:
                                      </span>
                                      HTML5, SCSS, JS
                                    </div>
                                  </div>
                                  <div>
                                    <div className=" mt-10">
                                      <a
                                        href="/"
                                        download
                                        className="rounded-2xl bg-red-600 hover:bg-red-500 p-3 text-white justify-center flex items-center w-40"
                                      >
                                        Visit project
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Portfolio;
