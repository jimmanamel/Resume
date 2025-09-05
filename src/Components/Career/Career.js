import { experiences } from "../Constants/constant";
import CareerImage from "../../Images/careerImage.webp";

import "./Career.scss";

const Career = () => {
  return (
    <section className="career">
      <div className="career__container">
        {/* Left content */}
        <div className="career__content">
          <h1 className="career__title">
            My <span>Career</span> as a <strong>Frontend Developer</strong>
          </h1>
          <p className="career__subtitle">
            I’m a young Frontend developer with five years of experience, but
            with a huge motivation to create something user-friendly and
            beautiful.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="career__btn"
            href="https://www.linkedin.com/in/jim-joseph-96940b175/"
          >
            Let’s Connect
          </a>
        </div>

        {/* Right image */}
        <div className="career__image-wrapper">
          <img
            src={CareerImage}
            alt="Frontend developer illustration"
            className="career__image"
            loading="eager"
          />
        </div>
      </div>
      {/* Services / Career Path */}
      <div className="career__services-section">
        <div className="career__services-wrapper">
          <div className="career__services-title-box">
            <h2 className="career__services-title">
              Career <span>Path</span>
            </h2>
          </div>

          <div className="career__services-grid">
            {experiences.map((service, index) => (
              <div className="career__service-card" key={service.id}>
                <div className="career__service-icon">
                  <img
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="career-icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="career__service-title">{service.title}</h3>
                <p className="career__service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
