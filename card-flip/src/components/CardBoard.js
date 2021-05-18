import Card from "./Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCardsCollection,
  setCardsIsFlipped,
  setCardsIsDisabled,
  flipCard,
  disableCard,
} from "../actions/cards";

const CardBoard = () => {
  const [pairs, setPairs] = useState([]);

  const cardsNumber = useSelector((state) => state.cardsLength.length);
  const reset = useSelector((state) => state.reset.reset);
  const cardsCollection = useSelector((state) => state.cards.cardsCollection);

  const dispatch = useDispatch();
  console.log(cardsCollection);
  useEffect(() => {
    if (cardsNumber > 0) {
      setPairs([]);

      const initArr = falseArrayFormation();
      dispatch(setCardsIsFlipped(initArr));
      dispatch(setCardsIsDisabled(initArr));

      const cards = cardsFormation();
      dispatch(setCardsCollection(cards));
    }
  }, [cardsNumber, reset]);

  const numberMapping = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K",
  };

  const categoryMapping = { 0: "S", 1: "C", 2: "D", 3: "H" };

  const getRandomNumber = () => Math.floor(Math.random() * 13 + 1);
  const getRandomCategory = () => Math.floor(Math.random() * 4);

  const cardsFormation = () => {
    const cards = [];

    for (let i = 0; i < cardsNumber; i++) {
      let number = getRandomNumber();
      let category = getRandomCategory();

      let type = numberMapping[number] + categoryMapping[category];
      cards.push(type);
    }

    return cards;
  };

  const falseArrayFormation = () => {
    const arr = [];

    for (let i = 0; i < cardsNumber; i++) {
      arr.push(false);
    }

    return arr;
  };

  const onAdd = (id) => {
    setPairs([...pairs, id]);
  };

  const compare = () => {
    setTimeout(() => {
      if (pairs.length === 2) {
        let card1 = cardsCollection[pairs[0]];
        let card2 = cardsCollection[pairs[1]];

        let id1 = pairs[0];
        let id2 = pairs[1];

        if (card1 === card2) {
          dispatch(disableCard(id1));
          dispatch(disableCard(id2));
        } else {
          dispatch(flipCard(id1));
          dispatch(flipCard(id2));
        }

        setPairs([]);
      }
    }, 750);
  };

  useEffect(() => {
    console.log(pairs);
    compare();
  }, [pairs]);

  return (
    <div className="card-container">
      {cardsCollection &&
        cardsCollection.map((card, index) => (
          <Card key={index} id={index} onAdd={onAdd} />
        ))}
    </div>
  );
};

export default CardBoard;
