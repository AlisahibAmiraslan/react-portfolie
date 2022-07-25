import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Work from "./Work/Work";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading bg-black w-full h-screen flex justify-center items-center">
          <BounceLoader color={"#D0021B"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Home />
          <About />
          <Service />
          <Work />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
