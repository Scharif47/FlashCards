import React from "react";

function Table({ cards, setCards }) {
  const onDelete = (index) => {
    setCards(cards.filter((card, i) => i !== index));
  };

  const renderCards = cards.map((card, i) => (
    <tr key={i} className="bg-red-300 border-2 border-red-900">
      <td>{card.cardFront}</td>
      <td>{card.cardBack}</td>
      <td className="cursor-pointer">Edit</td>
      <td onClick={() => onDelete(i)} className="cursor-pointer">
        X
      </td>
    </tr>
  ));

  return (
    <table className="my-16 table-auto border-2 w-10/12 mx-auto border-red-800">
      <thead>
        <tr className="bg-red-700">
          <th>Front</th>
          <th>Back</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr className="bg-red-300">
          <td>Front</td>
          <td>Back</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr> */}
        {renderCards}
      </tbody>
    </table>
  );
}

export default Table;
