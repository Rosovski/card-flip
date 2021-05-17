const initState = {
  cardsCollection: [],
  cardsIsFlipped: [],
  cardsIsDisabled: [],
};

const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_CARDS_COLLECTION":
      return {
        ...state,
        cardsCollection: action.payload,
      };
    case "NEW_CARDS_IS_FLIPPED":
      return {
        ...state,
        cardsIsFlipped: action.payload,
      };
    case "NEW_CARDS_IS_DISABLED":
      return {
        ...state,
        cardsIsDisabled: action.payload,
      };
    case "FLIP_CARD":
      const flipIndex = action.payload;
      const flipArray = [...state.cardsIsFlipped];
      flipArray[flipIndex] = !flipArray[flipIndex];

      return {
        ...state,
        cardsIsFlipped: flipArray,
      };
    case "DISABLE_CARD":
      const disableIndex = action.payload;
      const disableArray = [...state.cardsIsDisabled];
      disableArray[disableIndex] = !disableArray[disableIndex];

      return {
        ...state,
        cardsIsDisabled: disableArray,
      };
    default:
      return state;
  }
};

export default cardsReducer;
