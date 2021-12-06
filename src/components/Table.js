import React from "react";

function Table({ cards, setCards, useEdit, setUseEdit, setCardid }) {
  const onDelete = (index) => {
    setCards(cards.filter((card, i) => i !== index));
  };

  const handleEdit = (index) => {
    setUseEdit(!useEdit);
    setCardid(index);
  };

  const renderCards = cards.map((card, i) => (
    <tr
      key={i}
      className="bg-red-400 border-2 border-red-900 odd:bg-red-300 hover:bg-red-200"
    >
      <td>{card.cardFront}</td>
      <td>{card.cardBack}</td>
      <td onClick={() => handleEdit(i)} className="cursor-pointer">
        Edit
      </td>
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
      <tbody>{renderCards}</tbody>
    </table>
  );
}

export default Table;
