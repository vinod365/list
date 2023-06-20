import "./style.css";

import { increment } from "../../app/features/addSlice";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Model = ({ isShown }) => {
  const dispatch = useDispatch();

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  function handleOnHeadingClick(e) {
    setHeading(e.target.value);
  }

  function handleOnDescriptionClick(e) {
    setDescription(e.target.value);
  }

  function handleOnSubmit() {
    dispatch(
      increment({
        heading,
        description,
      })
    );
  }

  return (
    <div className={`model ${isShown ? "" : "shown"}`}>
      <div className="inputs">
        <input
          value={heading}
          onChange={handleOnHeadingClick}
          placeholder="Enter Heading"
        ></input>
        <input
          className="description--input"
          value={description}
          onChange={handleOnDescriptionClick}
          placeholder="Enter Description"
        ></input>
      </div>
      <button onClick={handleOnSubmit}>save</button>
    </div>
  );
};

export default Model;
