import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCardsNumber } from "../actions/number";

const Header = () => {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setCardsNumber(number));
  };

  return (
    <div className="header">
      <h2>Enter the number of cards you wanna display on the page</h2>
      <form className="set-card" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Please enter a number between 1 - 9"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Header;
