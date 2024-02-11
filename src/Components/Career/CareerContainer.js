import { FaUserGraduate, FaTools } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";

import "./Career.scss";

const CareerContainer = () => {
  return (
    <div className="careerContainer">
      <div className="careerHeader">
        <u>Career Summary</u>
      </div>
      <div className="careerInnerContainer">
        <div className="professionalCareer">
          <BiBriefcase />
          <p>Summary of professional career</p>
        </div>
        <div className="container">
          <div className="careerCover">
            <div className="career2">
              <FaUserGraduate />
              B.Tech graduate in computer science and engineering, from CEC in
              the year of 2020
              <button>Read More</button>
            </div>
          </div>
          <div className="careerCover">
            <div className="career3">
              <FaTools />
              Has 3 years of Professional experience in variety of font end,
              backend and full stack technologies
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerContainer;
