import React, { useState } from "react";

const PersonList = () => {
  const [data, setData] = useState([
    { id: 1, name: "pubordee", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
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
