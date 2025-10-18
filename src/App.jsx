import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "pubordee", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
  ]);
  console.table(data);
  return (
    <>
      <h1>จำนวนประชากร {data.length}</h1>
      <ul>
        {data.map((item, index) => (
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

export default App;
