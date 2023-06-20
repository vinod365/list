import "./style.css";

import { increment } from "../../app/features/addSlice";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import JoditEditor from "jodit-react";

const Model = ({ content, heading, setContent, setHeading, isShown }) => {
  const dispatch = useDispatch();

  function handleOnContentChange(newContent) {
    setContent(newContent);
  }

  function handleOnHeadingChange(e) {
    setHeading(e.target.value);
  }

  function handleOnSubmit() {
    dispatch(
      increment({
        heading,
        description: content,
      })
    );
  }

  return (
    <div className={`model ${isShown ? "" : "shown"}`}>
      <input
        value={heading}
        onChange={handleOnHeadingChange}
        placeholder="Heading"
      ></input>
      <JoditEditor
        value={content}
        onChange={handleOnContentChange}
      ></JoditEditor>
      <button onClick={handleOnSubmit}>save</button>
    </div>
  );
};

export default Model;
