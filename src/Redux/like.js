const like = JSON.parse(localStorage.getItem("like") || "[]");

export const reLike = (state = like, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const find = state.find((item) => item.id === action.payload.id);
      if (!find) {
        return [...state, action.payload];
      } else {
        // alert("Bu tavar mavjud")
        return state;
      }

    default:
      return state;
  }
};

export const acAddLike = (payload) => {
  return {
    type: "ADD_LIKE",
    payload,
  };
};
