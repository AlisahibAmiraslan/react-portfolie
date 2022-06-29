import React from "react";
import Navbar from "./Navbar/Navbar";
import HomeContent from "./Home-content/HomeContent";
import "./home.scss";

function Home() {
  return (
    <div className="home" id="home">
      <Navbar />
      <HomeContent />
    </div>
  );
}

export default Home;
