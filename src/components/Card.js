import React from "react";

function Card({cards}) {

  console.log("From Card Component: ", cards)

  return (
    <div>
      <div className="w-10/12 h-60 border-2 my-8 p-3 mx-auto border-red-700">
        <p></p>
      </div>
    </div>
  );
}

export default Card;
