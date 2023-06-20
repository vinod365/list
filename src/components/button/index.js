import "./style.css";

import { increment } from "../../app/features/addSlice";

import { useSelector, useDispatch } from "react-redux";

const Button = ({ setIsShown }) => {
  const dispatch = useDispatch();

  function handleOnClick() {
    setIsShown((state) => !state);
  }

  return (
    <div onClick={handleOnClick} className="button">
      <p>Add note</p>
    </div>
  );
};

export default Button;
