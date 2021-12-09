import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import Card from "../components/Card";

function CardPage({ cards }) {
  const [isActive, setIsActive] = useState(false);

  const { cardid } = useParams();
  const useCards = cards || JSON.parse(localStorage.getItem("cards"));

  useEffect(() => {
    setIsActive(false)
  }, [cardid])

  return (
    <div>
      {cardid >= cards.length || cardid < 0 || isNaN(cardid) ? (
        <h1>There is nothing here!</h1>
      ) : (
        <div>
          <h1 className="text-4xl">Card Viewer</h1>
          <Card
            cards={useCards}
            cardid={cardid}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          {cardid >= 1 && (
            <NavLink
              to={`/${Number(cardid) - 1}`}
              className="shadow-xl px-4 py-1 bg-blue-500 rounded-full mr-2"
            >
              Previous Card
            </NavLink>
          )}
          {Number(cardid) === cards.length - 1 ? (
            <NavLink
              to="/0"
              className="shadow-xl px-4 py-1 bg-blue-500 rounded-full ml-2"
            >
              Go to Start
            </NavLink>
          ) : (
            <NavLink
              to={`/${Number(cardid) + 1}`}
              className="shadow-xl px-4 py-1 bg-blue-500 rounded-full ml-2"
            >
              Next Card
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
}

export default CardPage;
