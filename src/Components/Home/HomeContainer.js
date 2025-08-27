import dp from "../../Images/Edited_blackshirt.png";
import { handleResumeDownload } from "../Helper/helper";
import { socialLinks } from "../Constants/constant";
import "./Home.scss";

const HomeContainer = () => (
  <div className="home">
    <div className="home__image-wrapper">
      <img className="home__image" src={dp} alt="Profile" />
    </div>

    <div className="home__content">
      <p className="home__name">Jim Joseph</p>

      <p className="home__designation">
        Software{" "}
        <span className="home__designation-type">Developer & Designer</span>
      </p>

      <p className="home__description">
        Experienced Software Developer with 5 years of expertise at Accenture,
        Wipro & Apple.
      </p>

      <div className="home__socials">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="home__social-link"
          >
            {icon}
          </a>
        ))}
      </div>

      <button className="home__button" onClick={handleResumeDownload}>
        Download CV
      </button>
    </div>
  </div>
);

export default HomeContainer;
