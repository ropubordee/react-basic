import React, { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./StyleCss/PersonList.css";
const PersonList = () => {
  const [data, setData] = useState([
    { id: 1, name: "pubordee", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);

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
            <li key={index} style={{borderStyle :'solid',borderColor : item.gender =='ชาย' ? 'green' : 'pink'}}>
              <img
                src={item.gender == "ชาย" ? boy : girl}
                alt="imageicon"
                width={50}
                height={50}
              />

              <p>{item.name}</p>
              <pv className="control">
                <button>ลบ</button>
              </pv>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
