import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import "./StyleCss/PersonList.css";
import User from "./User";
const PersonList = ({ data, deleteUser }) => {
  const myStyle = {
    color: "red",
    fontSize: "30px",
  };

  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h2 style={myStyle}>จำนวนประชากร {data.length}</h2>
        <span onClick={() => setShow(!show)}>
          {show ? <FaRegEyeSlash size={30} /> : <FaRegEye size={30} />}
        </span>
      </div>
      <ul>
        {show &&
          data.map((item, index) => (
            <User key={index} item={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
