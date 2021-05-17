import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCardFlip from "react-card-flip";
import { flipCard } from "../actions/cards";

const Card = ({ id, onAdd }) => {
  const type = useSelector((state) => state.cards.cardsCollection[id]);
  const isFlipped = useSelector((state) => state.cards.cardsIsFlipped[id]);
  const isDisabled = useSelector((state) => state.cards.cardsIsDisabled[id]);

  const dispatch = useDispatch();

  const imagePath = process.env.PUBLIC_URL + "/assets/images/";

  const onClick = () => {
    if (!isDisabled && !isFlipped) {
      dispatch(flipCard(id));
      onAdd(id);
    }
  };

  return (
    <div className="card" onClick={onClick}>
      {isDisabled ? (
        <>
          <div>
            <img src={`${imagePath}${type}.png`} alt="..." />
          </div>
        </>
      ) : (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
            <img src={`${imagePath}red_back.png`} alt="..." />
          </div>

          <div>
            <img src={`${imagePath}${type}.png`} alt="..." />
          </div>
        </ReactCardFlip>
      )}
    </div>
  );
};

export default Card;
