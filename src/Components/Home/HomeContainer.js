import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";

import dp from "../../Images/Edited_blackshirt.png";
import "./Home.scss";

const HomeContainer = () => {
  return (
    <div className="homeContainer">
      <div className="imageContainer">
        <img
          className="centered-image"
          src={dp}
          alt="My image"
          width="644px"
          height="671px"
        />
      </div>
      <div className="textContainer">
        <p className="name">Jim Joseph</p>
        <p className="designation">Software Developer & Designer</p>
        <p className="Content">
          An experienced developer with 3 years of professional expertise in
          working with Wipro & Apple.
        </p>
        <div className="socialMediaLogos">
          <span>
            <AiOutlineLinkedin size="2em" />
          </span>
          <span>
            <AiOutlineFacebook size="2em" />
          </span>
          <span>
            <AiOutlineInstagram size="2em" />
          </span>
          <span>
            <CiTwitter size="2em" />
          </span>
          <span>
            <BiLogoWhatsapp size="2em" />
          </span>
        </div>
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default HomeContainer;
