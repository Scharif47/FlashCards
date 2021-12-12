export const initialState = [];

export function init(initialState) {
  return { cards: JSON.parse(localStorage.getItem("cards")) || initialState };
}

export function cardsReducer(state, action) {
  switch (action.type) {
    case "card-added": {
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: state.cards.length,
            cardFront: action.cardFront,
            cardBack: action.cardBack,
            flipped: false,
          },
        ],
      };
    }
    case "card-edited": {
      return {
        ...state,
        cards: state.cards.map((c) =>
          c.id === action.id
            ? {
                id: c.id,
                cardFront: action.cardFront,
                cardBack: action.cardBack,
                flipped: false,
              }
            : c
        ),
      };
    }
    case "card-deleted": {
      return {
        ...state,
        cards: state.cards.filter((c) => c.id !== action.id),
      };
    }
    default:
      throw Error("Unknown type: " + action.type);
  }
}
