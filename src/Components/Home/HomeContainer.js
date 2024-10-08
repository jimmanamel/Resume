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
        <img className="centered-image" src={dp} alt="Not loaded" />
      </div>
      <div className="textContainer">
        <p className="name">Jim Joseph</p>
        <div className="designation">
          Software&nbsp;
          <p className="designation__type">Developer & Designer</p>
        </div>

        <p className="content">
          An experienced Software developer with 4 years of professional
          expertise in working with Accenture, Wipro & Apple.
        </p>
        <section>
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
        </section>
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default HomeContainer;
