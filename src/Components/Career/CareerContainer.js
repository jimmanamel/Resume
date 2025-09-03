import React from "react";
import "./Career.scss";
import CareerImage from "../../Images/careerImage.webp";

const experiences = [
  {
    title: "Graduation",
    description:
      "Completed my Bachelor's degree in Computer Science and Engineering from College of Engineering, Chengannur in the year of 2020.",
    icon: "https://twemoji.maxcdn.com/v/latest/svg/1f393.svg",
  },
  {
    title: "Project Engineer",
    description:
      "Started my career with Wipro & Apple in the year 2020, right after college.",
    icon: "https://twemoji.maxcdn.com/v/latest/svg/1f4bc.svg",
  },
  {
    title: "Analyst",
    description:
      "Switched to Accenture in 2023, to a senior position with more roles and responsibilities.",
    icon: "https://twemoji.maxcdn.com/v/latest/svg/1f9d1-200d-1f4bb.svg",
  },
];

const CareerContainer = () => {
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
            loading="lazy"
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
              <div className="career__service-card" key={index}>
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

export default CareerContainer;
