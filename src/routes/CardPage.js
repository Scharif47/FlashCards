import React from "react";
import Card from "../components/Card";

function CardPage({cards}) {
  console.log("From the CardPage", cards)

  return (
    <div>
      <h1 className="text-4xl">Card Viewer</h1>
      <Card cards={cards} />
      <button className="shadow-xl px-4 py-1 bg-blue-500 rounded-full">
        Next Card
      </button>
    </div>
  );
}

export default CardPage;
