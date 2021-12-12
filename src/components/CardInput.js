import React, { useState } from "react";

function CardInput({ dispatch }) {
  const [userInputFront, setUserInputFront] = useState("");
  const [userInputBack, setUserInputBack] = useState("");

  const addCard = () => {
    if (userInputFront === "" || userInputBack === "") {
      alert("Fill in both fields");
    } else {
      dispatch({
        type: "card-added",
        cardFront: userInputFront,
        cardBack: userInputBack,
      });
      setUserInputFront("");
      setUserInputBack("");
    }
  };

  return (
    <div className="flex flex-col justify-center  w-60 mx-auto sm:flex-row sm:w-10/12 py-2 px-2 rounded-2xl bg-green-500">
      <input
        placeholder="Front of Card"
        className="border-2 border-red-700 rounded-xl pl-1"
        type="text"
        onChange={(e) => setUserInputFront(e.target.value)}
        value={userInputFront}
      />
      <input
        placeholder="Back of Card"
        className="border-2 border-red-700 rounded-xl my-5 sm:my-0 sm:mx-5 pl-1"
        type="text"
        onChange={(e) => setUserInputBack(e.target.value)}
        value={userInputBack}
      />
      <button
        className="shadow-xl px-4 py-1 bg-blue-500 rounded-full"
        onClick={addCard}
      >
        Add Card
      </button>
    </div>
  );
}

export default CardInput;
