import React from "react";

function Table({ state, dispatch, useEdit, setUseEdit, setCardid }) {
  const onDelete = (cardId) => {    
    dispatch({
      type: "card-deleted",
      id: cardId
    })
    
  };

  const handleEdit = (index) => {
    setUseEdit(!useEdit);
    setCardid(index);
  };

  const renderCards = state.cards.map((card) => (
    <tr
      key={card.id}
      className="bg-red-400 border-2 border-red-900 odd:bg-red-300 hover:bg-red-200"
    >
      <td>{card.cardFront}</td>
      <td>{card.cardBack}</td>
      <td 
      onClick={() => handleEdit(card.id)} 
      className="cursor-pointer">
        Edit
      </td>
      <td onClick={() => onDelete(card.id)} className="cursor-pointer">
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
