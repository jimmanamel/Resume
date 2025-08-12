import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";

import dp from "../../Images/Edited_blackshirt.png";
import "./Home.scss";
import { handleResumeDownload } from "../Helper/helper";

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
          An experienced Software developer with 5 years of professional
          expertise in working with Accenture, Wipro & Apple.
        </p>
        <section>
          <a
            href="https://www.linkedin.com/in/jim-joseph-96940b175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiOutlineLinkedin />
            </span>
          </a>
          <a
            href="https://www.facebook.com/login.php/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiOutlineFacebook />
            </span>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiOutlineInstagram />
            </span>
          </a>
          <a
            href="https://x.com/?lang=en-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <CiTwitter />
            </span>
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <BiLogoWhatsapp />
            </span>
          </a>
        </section>
        <button onClick={handleResumeDownload}>Download CV</button>
      </div>
    </div>
  );
};

export default HomeContainer;
