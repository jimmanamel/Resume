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
      className={`flip-card ${isFlipped ? "flip-card--flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <BsBriefcase size="5em" />
          <p>Summary of professional career</p>
        </div>
        <div className="flip-card__back">
          <p>Back Text</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
