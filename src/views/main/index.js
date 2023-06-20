import { useState } from "react";
import Button from "../../components/button";
import List from "../../components/list";
import Model from "../../components/model2";

import "./style.css";

const Main = () => {
  const [isShown, setIsShown] = useState(false);
  const [content, setContent] = useState();
  const [heading, setHeading] = useState();

  const [ModelHeading, setModelHeading] = useState();
  const [ModelContent, setModelContent] = useState();
  return (
    <div className="main">
      <List
        setContent={setContent}
        setHeading={setHeading}
        setModelHeading={setModelHeading}
        setModelContent={setModelContent}
        setIsShown={setIsShown}
      ></List>
      <Button setIsShown={setIsShown} />
      <Model
        content={content}
        heading={heading}
        setContent={setContent}
        setHeading={setHeading}
        ModelHeading={ModelHeading}
        ModelContent={ModelContent}
        isShown={isShown}
      ></Model>
    </div>
  );
};

export default Main;
