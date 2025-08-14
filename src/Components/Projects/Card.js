const Card = ({ card, openModal }) => {
  const { id, imgSrc, name } = card;
  return (
    <div key={id} className="card-carousel__card" onClick={()=>openModal(id)}>
      <img src={imgSrc} alt={name} className="card-carousel__card-img" />
      <div className="card-carousel__card-overlay">
        <div className="card-carousel__card-text">{name}</div>
      </div>
    </div>
  );
};

export default Card;
