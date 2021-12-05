import React from "react";
import CardInput from "../components/CardInput";
import Table from "../components/Table";
import CardsPage from "./CardsPage";

function Home({ cards, setCards }) {
  return (
    <div className="flex flex-col justify-center align-middle">
      <h1 className="text-4xl">Card Editor</h1>
      <Table cards={cards} setCards={setCards} />
      <CardInput cards={cards} setCards={setCards} />
      <CardsPage cards={cards} />
    </div>
  );
}

export default Home;
