import { Fragment, useEffect, useState } from "react";
import Home from "./Home/Home";
import NavBar from "./Navigation/NavBar";
import "./MainContainer.css";
import About from "./About/About";
import EduWork from "./EduWork/EduWork";
import Personal from "./Personal/Personal";
import Contact from "./Contact/Contact";

const MainContainer = () => {
  const [selectedNav, setSelectedNav] = useState("Home");

  useEffect(() => {
    window.addEventListener("scroll", scrollPosition);
  }, []);
  const scrollPosition = () => {
    if(window.scrollY>=1510){
      setSelectedNav("Contacts")
    }
    else if(window.scrollY>=1300){
      setSelectedNav("Projects")
    }
    else if(window.scrollY>=400){
      setSelectedNav("Career")
    }
    else{
      setSelectedNav("Home")
    }
  };

  return (
    <Fragment>
      <div className="NavBarContainer">
        <NavBar selectedNav={selectedNav} />
      </div>
      <div id="Home" className="Home">
        <Home />
      </div>
      {/* <div className="About"><About/></div> */}
      <div id="Career" className="EduWork">
        <EduWork />
      </div>
      <div id="Projects" className="Projects">
        <Personal />
      </div>
      <div id="Contacts" className="Contacts">
        <Contact />
      </div>
    </Fragment>
  );
};

export default MainContainer;
