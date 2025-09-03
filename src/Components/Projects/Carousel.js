import { useState } from "react";
import { useMediaQueryContext } from "../../MediaQueryContext";
import Card from "./Card";
import { cards } from "../Constants/constant";
import CaseStudyModal from "./CaseStudyModal";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Carousel.scss";

const Carousel = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const { isMobile } = useMediaQueryContext();
  const cardsPerPage = isMobile ? 3 : 6;

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = pageIndex * cardsPerPage;
  const currentPageCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const openModal = (card) => setSelectedCard(card);
  const closeModal = () => setSelectedCard(null);

  const handlePrev = () => pageIndex > 0 && setPageIndex(pageIndex - 1);
  const handleNext = () =>
    pageIndex < totalPages - 1 && setPageIndex(pageIndex + 1);

  return (
    <div className="card-carousel">
      <button
        className="card-carousel__arrow card-carousel__arrow--left"
        onClick={handlePrev}
        disabled={pageIndex === 0}
        aria-label="Previous"
      >
        <IoIosArrowBack size={25} />
      </button>

      <div className="card-carousel__viewport">
        <div className="card-carousel__cards">
          {currentPageCards.map((card) => (
            <Card key={card.id} card={card} openModal={openModal} />
          ))}
        </div>
      </div>

      <button
        className="card-carousel__arrow card-carousel__arrow--right"
        onClick={handleNext}
        disabled={pageIndex === totalPages - 1}
        aria-label="Next"
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
            onClick={() => setPageIndex(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      <CaseStudyModal
        isOpen={!!selectedCard}
        onClose={closeModal}
        selectedItemId={selectedCard}
      />
    </div>
  );
};

export default Carousel;
