const card = JSON.parse(localStorage.getItem("card") || "[]");

export const reCard = (state = card, action) => {
  switch (action.type) {
    case "ADD_CARD":
      const find = state.find((item) => item.id === action.payload.id);

      if (!find) {
        return [...state, action.payload];
      } else {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        });
      }

    case "INCREMENT_ITEM":
      return state.map((item) => {
        if (item?.id === action?.payload) {
          return {
            ...item,
            count: item?.count + 1,
          };
        } else {
          return item;
        }
      });

    case "DECREMENT_ITEM":
      return state.map((item) => {
        if (item?.id === action?.payload) {
          return {
            ...item,
            count: item.count > 0 ? item?.count - 1 : 0,
          };
        } else {
          return item;
        }
      });

    case "DELETE_ITEM":
      return state.filter((item) => item?.id !== action?.payload);

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

export const acIncrementItem = (id) => {
  return {
    type: "INCREMENT_ITEM",
    payload: id,
  };
};

export const acDecrementItem = (id) => {
  return {
    type: "DECREMENT_ITEM",
    payload: id,
  };
};

export const acDeleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};
