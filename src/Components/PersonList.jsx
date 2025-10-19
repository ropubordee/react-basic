import React, { useState } from "react";
import boy from "../assets/boy.svg";
import girl from '../assets/girl.svg'
const PersonList = () => {
  const [data, setData] = useState([
    { id: 1, name: "pubordee", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>จำนวนประชากร {data.length}</h1>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      <ul>
        {show &&
          data.map((item, index) => (
            <li key={index}>
              <img src={item.gender == 'ชาย' ? boy : girl} alt="imageicon" width={50} height={50} />

              <h3>
                {item.id}| {item.name} | {item.gender}
              </h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PersonList;
