import { Fragment } from "react";
import Home from "./Home/Home";
import NavBar from "./Navigation/NavBar";
import "./MainContainer.css";
import About from "./About/About";
import EduWork from "./EduWork/EduWork";
import Personal from "./Personal/Personal";
import Contact from "./Contact/Contact";

const MainContainer = () => {

  return (
    <Fragment>
        <div className="NavBarContainer"><NavBar/></div>
      <div className="Home"><Home/></div>
      {/* <div className="About"><About/></div> */}
      <div className="EduWork"><EduWork/></div>
      <div className="Projects"><Personal/></div>
      <div className="Contacts"><Contact/></div>
    </Fragment>
  );
};

export default MainContainer;
