import { Fragment } from "react";
import Home from "./Home/Home";
import NavBar from "./Navigation/NavBar";
import "./MainContainer.css";
import About from "./About/About";
import EduWork from "./Education/EduWork";

const MainContainer = () => {
  return (
    <Fragment>
        <div className="NavBarContainer"><NavBar/></div>
      <div className="Home"><Home/></div>
      <div className="About"><About/></div>
      <div className="EduWork"><EduWork/></div>
      <div className="Skills">Skills</div>
      <div className="Projects">Projects</div>
      <div className="Contacts">Contacts</div>
    </Fragment>
  );
};

export default MainContainer;
