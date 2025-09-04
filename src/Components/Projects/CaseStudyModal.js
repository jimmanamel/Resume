import React from "react";
import Modal from "../Modal/Modal";
import "./CaseStudyModal.scss";
import { cards } from "../Constants/constant";

export default function CaseStudyModal({ isOpen, onClose, selectedItemId }) {
  const selectedItem = cards.find((card) => card.id === selectedItemId);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="case-study">
        <h2 className="case-study__title">{selectedItem?.name}</h2>
        <p className="case-study__description">{selectedItem?.description}</p>

        <div className="case-study__video">
          <video controls>
            <source src="/videos/case-study.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <a
          className="case-study__link"
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </Modal>
  );
}
