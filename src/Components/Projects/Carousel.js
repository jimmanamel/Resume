import { useState } from "react";
import { useMediaQueryContext } from "../../MediaQueryContext";
import { cards } from "../Constants/constant";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "./Carousel.scss";

const Carousel = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { isDesktop } = useMediaQueryContext();
  const cardsPerPage = isDesktop ? 6 : 3;

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = pageIndex * cardsPerPage;
  const currentPageCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handlePageChange = (index) => {
    setPageIndex(index);
  };
  return (
    <div className="card-carousel">
      <button
        className="card-carousel__arrow card-carousel__arrow--left"
        onClick={handlePrev}
        disabled={pageIndex === 0}
      >
        <IoIosArrowBack size={25} />
      </button>
      <div className="card-carousel__viewport">
        <div className="card-carousel__cards">
          {currentPageCards.map((card) => (
            <div key={card.id} className="card-carousel__card">
              <img
                src={card.imgSrc}
                alt={card.content}
                className="card-carousel__card-img"
              />
              <div className="card-carousel__card-overlay">
                <div className="card-carousel__card-text">{card.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="card-carousel__arrow card-carousel__arrow--right"
        onClick={handleNext}
        disabled={pageIndex === totalPages - 1}
      >
        <IoIosArrowForward size={25} />
      </button>
      <div className="card-carousel__pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`card-carousel__pagination-circle ${
              pageIndex === index
                ? "card-carousel__pagination-circle--active"
                : ""
            }`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
