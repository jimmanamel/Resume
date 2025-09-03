import { IoIosConstruct } from "react-icons/io";
import ComingSoonContainer from "../ComingSoon/ComingSoonContainer";

const Card = ({ card, openModal }) => {
  const { id, imgSrc, name } = card;
  const hasImage = !!imgSrc;
  return (
    <div
      key={id}
      className="card-carousel__card"
      onClick={() => (hasImage ? openModal(id) : null)}
    >
      {hasImage ? (
        <>
          <img src={imgSrc} alt={name} className="card-carousel__card-img" />
          <div className="card-carousel__card-overlay">
            <div className="card-carousel__card-text">{name}</div>
          </div>
        </>
      ) : (
        <ComingSoonContainer />
      )}
    </div>
  );
};

export default Card;
