import React, { useReducer, useEffect } from "react";
import { initialState, init, cardsReducer } from "./cardsReducer";
import { Routes, Route } from "react-router";
import CardPage from "./routes/CardPage";
import Home from "./routes/Home";
import Footer from "./components/Footer";

function App() {
  const [state, dispatch] = useReducer(cardsReducer, initialState, init);

  console.log("From the App: ", state);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(state.cards));
  }, [state.cards]);

  return (
    <div className="App container mx-auto text-center pt-16">
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route path=":pageId" element={<CardPage state={state} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
