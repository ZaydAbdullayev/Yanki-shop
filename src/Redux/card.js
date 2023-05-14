const card = JSON.parse(localStorage.getItem("card") || "[]");

export const reCard = (state = card, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, action.payload];

    default:
      return state;
  }
};

export const acAddCard = (payload) => {
  return {
    type: "ADD_CARD",
    payload,
  };
};
