const initState = {
  length: 0,
};

const cardsLengthReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_CARDS_NUMBER":
      return {
        ...state,
        length: action.payload,
      };
    default:
      return state;
  }
};

export default cardsLengthReducer;
