import Card from "./Card";

const CardBoard = ({ cardsCollection }) => {
  return (
    <div className="card-container">
      {cardsCollection.map((card, index) => (
        <Card key={index} type={card} />
      ))}
    </div>
  );
};

export default CardBoard;
