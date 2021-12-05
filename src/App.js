import React, { useState } from "react";
import { Routes, Route } from "react-router";
import CardPage from "./routes/CardPage";
import CardsPage from "./routes/CardsPage";
import Home from "./routes/Home";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App container mx-auto text-center pt-16">
      <Routes>
        <Route path="/" element={<Home cards={cards} setCards={setCards} />} />
        <Route path="cards" element={<CardsPage />}>
          <Route path=":card" element={<CardPage />} />
        </Route>
        <Route path="*" element={<h1>There is nothing here!</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
