export const setCardsCollection = (cards) => {
  return {
    type: "NEW_CARDS_COLLECTION",
    payload: cards,
  };
};

export const setCardsIsFlipped = (cards) => {
  return {
    type: "NEW_CARDS_IS_FLIPPED",
    payload: cards,
  };
};

export const setCardsIsDisabled = (cards) => {
  return {
    type: "NEW_CARDS_IS_DISABLED",
    payload: cards,
  };
};

export const flipCard = (id) => {
  return {
    type: "FLIP_CARD",
    payload: id,
  };
};

export const disableCard = (id) => {
  return {
    type: "DISABLE_CARD",
    payload: id,
  };
};
