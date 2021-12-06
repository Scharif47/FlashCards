import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import CardPage from "./routes/CardPage";
import Home from "./routes/Home";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="App container mx-auto text-center pt-16">
      <Routes>
        <Route path="/" element={<Home cards={cards} setCards={setCards} />} />
        <Route path=":cardid" element={<CardPage cards={cards} />} />

        <Route path="*" element={<h1>There is nothing here!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
