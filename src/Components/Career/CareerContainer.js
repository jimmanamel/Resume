import { FaUserGraduate, FaTools } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";

import "./Career.scss";

const CareerContainer = () => {
  return (
    <div className="careerContainer">
      <div className="careerHeader">
        <u>Career Summary</u>
      </div>
      <div className="careerInnerContainer">
        <div className="professionalCareer">
          <span>
          <BsBriefcase size="5em"/>
          <p>Summary of professional career</p>
          </span>
        </div>
        <div className="container">
          <div className="careerCover">
            <div className="career2">
              <span>
              <FaUserGraduate size="4em"/>
              <p>B.Tech graduate in computer science and engineering, from CEC, in the year of 2020</p>
              </span>
              <button>Read More</button>
            </div>
          </div>
          <div className="careerCover">
            <div className="career3">
              <span>
              <FaTools size="4em"/>
              <p>Has 3 years of Professional expertise in variety of fontend, backend and fullstack technologies</p>
              </span>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerContainer;
