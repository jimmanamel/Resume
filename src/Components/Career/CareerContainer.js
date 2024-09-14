import { FaUserGraduate, FaTools } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";

import "./Career.scss";
import FlipCard from "./FlipCard";

const CareerContainer = () => {
  return (
    <div className="careerContainer">
      <u className="careerContainer__Header">
        Career Summary
      </u>
      <div className="careerInnerContainer">
        <FlipCard/>
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
              <p>experience in working on variety of frontend, backend and fullstack technologies</p>
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
