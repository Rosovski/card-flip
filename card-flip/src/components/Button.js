import { useSelector, useDispatch } from "react-redux";
import { resetCards } from "../actions/button";

const Button = () => {
  const reset = useSelector((state) => state.reset.reset);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetCards());
  };

  return (
    <>
      <button className="shuffle-button" onClick={onClick}>
        Shuffle
      </button>
    </>
  );
};

export default Button;
