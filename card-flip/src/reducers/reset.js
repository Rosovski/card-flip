const initState = {
  reset: 0,
};

const resetReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESET":
      let newReset = state.reset;
      newReset += 1;

      return {
        ...state,
        reset: newReset,
      };
    default:
      return state;
  }
};

export default resetReducer;
