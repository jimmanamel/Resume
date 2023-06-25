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
          <b>...</b>
        </div>
        <div className="socialMediaContainer">
        <div className="socialMedia"><img src={WhatsApp} className="WhatsAppIcon" alt="WhatsApp" /></div>
        <div className="socialMedia"><img src={instagram} className="instagramIcon" alt="instagram" /></div>
          <div className="socialMedia"><img src={linkedin} className="linkedinIcon" alt="linkedin" /></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
