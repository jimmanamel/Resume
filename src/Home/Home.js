import { Fragment } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import myPic from "././profilePic.png";
import facebook from "././facebook.png";
import instagram from "././instagram.png";
import WhatsApp from "././WhatsApp.png";
import linkedin from "././linkedin.png";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="downloadIconContainer">
        <div className="downloadIcon">
          <AiOutlineDownload size="2em" />
        </div>
      </div>
      <div className="nameCard">
        <img src={myPic} className="myPic" alt="MY PIC" />
        <div className="homeTextRow">
          <b>Jim Joseph</b>
          <b>Software Developer</b>
        </div>
        <p> I am passionate software engineer, Currently working as a Project Engineer in Wipro Technologies Ltd.<br/> Has experience in working in various project and application over 3 years. </p>
        <p> It was good meeting you, have a great tour and share your experience!</p>
      </div>
    </Fragment>
  );
};

export default Home;
