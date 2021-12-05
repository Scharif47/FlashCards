import React, { useState } from "react";

function CardInput({cards, setCards}) {
  const [userInputFront, setUserInputFront] = useState("");
  const [userInputBack, setUserInputBack] = useState("");
  /* const [cards, setCards] = useState([]); */


  const addCard = () => {
    const tempCard = {
      cardFront: userInputFront,
      cardBack: userInputBack
    };

    
    setCards([...cards, tempCard]);
    setUserInputFront("");
    setUserInputBack("")
  }

  return (
    <div className="flex flex-col justify-center  w-60 mx-auto sm:flex-row sm:w-full">
      <input
        placeholder="Front of Card"
        className="border-2 border-red-700 rounded-xl"
        type="text"
        onChange={(e) => setUserInputFront(e.target.value)}
        value={userInputFront}
      />
      <input
        placeholder="Back of Card"
        className="border-2 border-red-700 rounded-xl my-5 sm:my-0 sm:mx-5"
        type="text"
        onChange={(e) => setUserInputBack(e.target.value)}
        value={userInputBack}
      />
      <button className="shadow-xl px-4 py-1 bg-blue-500 rounded-full" onClick={addCard} >
        Add Card
      </button>
    </div>
  );
}

export default CardInput;
