import { useState } from "react";

import { BsBriefcase } from "react-icons/bs";

import "./FlipCard.scss";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`flip-card ${isFlipped ? "flip-card--flipped" : ""} animate`}
      onClick={handleClick}
    >
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <BsBriefcase size="5em" />
          <p>Summary of professional career</p>
        </div>
        <div className="flip-card__back">
          <p>
            Experienced web application developer proficient in React JS, Redux,
            HTML5, CSS, JavaScript, and Next JS. Demonstrated success in
            delivering robust, responsive, and accessible web applications.
            Known for strong collaboration skills and a proactive approach to
            leadership, effectively guiding team efforts to achieve project
            goals. Deep understanding of both front-end and back-end
            technologies, with a focus on creating efficient and user-friendly
            interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
