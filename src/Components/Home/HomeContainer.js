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
          alt="error"
          width="597px"
          height="595px"
        />
      </div>
      <div className="textContainer">
        <p className="name">Jim Joseph</p>
        <p className="designation">Software Developer & Designer</p>
        
          <p className="content">
            An experienced developer with 3 years of professional expertise in
            working with Wipro & Apple.
          </p>
          <div className="lowerCell">
          <span>
            <AiOutlineLinkedin />
          </span>
          <span>
            <AiOutlineFacebook />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
          <span>
            <CiTwitter />
          </span>
          <span>
            <BiLogoWhatsapp />
          </span>
        </div>
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default HomeContainer;
