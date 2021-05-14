import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardBoard from "./components/CardBoard";

function App() {
  const [cardsNumber, setCardsNumber] = useState(0);
  const [cardsCollection, setCardsCollection] = useState([]);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    const cards = cardsFormation();
    setCardsCollection(cards);
  }, [cardsNumber, reset]);

  console.log(cardsNumber);

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

  return (
    <div className="App">
      <Header onChange={setCardsNumber} />
      <hr />
      <CardBoard cardsCollection={cardsCollection} />
      <button
        className="shuffle-button"
        onClick={() => setReset((prevReset) => prevReset + 1)}
      >
        Shuffle
      </button>
    </div>
  );
}

export default App;
