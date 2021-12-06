import React, {useState} from "react";
import "./Card.css";

function Card({ cards, cardid }) {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  }

  return (
    <div
      onClick={toggleClass}
      className={`flip-card mx-auto w-10/12 h-60 my-8 p-3 ${
        isActive && "active"
      }`}
    >
      <div className="flip-card-inner border-2 border-red-700 shadow-xl">
        <div className="flip-card-front bg-green-400 px-2">
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">{cardid && cards[cardid].cardFront}</p>
        </div>

        <div className="flip-card-back bg-red-500 px-2">
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">{cardid && cards[cardid].cardBack}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
