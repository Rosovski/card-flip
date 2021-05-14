import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ type }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const imagePath = process.env.PUBLIC_URL + "/assets/images/";

  const onClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={onClick}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src={`${imagePath}red_back.png`} alt="..." />
        </div>

        <div>
          <img src={`${imagePath}${type}.png`} alt="..." />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
