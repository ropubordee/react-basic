import React, { useState } from "react";

import "./StyleCss/PersonList.css";
import User from "./User";
const PersonList = ({data}) => {
  const myStyle = {
    color: "red",
    fontSize: "30px",
  };

  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h2 style={myStyle}>จำนวนประชากร {data.length}</h2>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>
      <ul>
        {show &&
          data.map((item, index) => (
            <User key={index} item={item}/>
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
