import { connect, useDispatch, useSelector } from "react-redux";
import Note from "../note";

import { decrement, selectAdd } from "../../app/features/addSlice";

import "./style.css";
import { useEffect, useState } from "react";

const List = ({ setHeading, setContent, setIsShown }) => {
  const data = useSelector(selectAdd);
  const [dataArray, setDataArray] = useState(data);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  function handleOnNoteClick(e) {
    dispatch(decrement(e));
  }

  function handleOnSearchChange(e) {
    setSearch(e.target.value);
    setDataArray(
      data.filter((ele) => {
        return ele.description.includes(search) || ele.heading.includes(search);
      })
    );
  }

  useEffect(() => {
    setDataArray(data);
  }, [data]);

  return (
    <>
      <input
        value={search}
        onChange={handleOnSearchChange}
        placeholder="Search Note"
        className="search"
      ></input>
      <div className="list">
        {dataArray.map((e) => (
          <Note
            setHeading={setHeading}
            setContent={setContent}
            onClick={() => handleOnNoteClick(e)}
            setIsShown={setIsShown}
            dataKey={e}
            heading={e["heading"]}
            description={e["description"]}
          ></Note>
        ))}
      </div>
    </>
  );
};

export default List;
