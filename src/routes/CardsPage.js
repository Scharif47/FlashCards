import React from "react";
import { Outlet } from "react-router";
import CardPage from "./CardPage";

function CardsPage({ cards }) {
  console.log("From the CardsPage: ", cards);
  return (
    <div>
      {/* <h1>There is nothing here yet!</h1> */}
      <Outlet />
      <div className="hidden">
        <CardPage cards={cards} />
      </div>
    </div>
  );
}

export default CardsPage;
