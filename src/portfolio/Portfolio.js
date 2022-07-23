import { useState } from "react";
import { Tab } from "@headlessui/react";
import "./portfolio.scss";
import classNames from "../enums/Classnames";
import { data } from "./data";

function Portfolio() {
  const [portfolies, setPortfolies] = useState(data);

  console.log(portfolies.All);

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
                      <a
                        href="/"
                        className="absolute top-0 left-0 flex justify-center items-center flex-col portfolie-link"
                      >
                        <h3 className="mb-4">{post.content}</h3>
                        <span className="text-sm">More Info</span>
                      </a>
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
