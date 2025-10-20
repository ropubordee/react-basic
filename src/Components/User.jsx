import React from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
const User = ({item,deleteUser}) => {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor: item.gender == "ชาย" ? "green" : "pink",
        }}
      >
        <img
          src={item.gender == "ชาย" ? boy : girl}
          alt="imageicon"
          width={50}
          height={50}
        />

        <p>{item.name}</p>
        <pv className="control">
          <button onClick={()=>deleteUser(item.id)}>ลบ</button>
        </pv>
      </li>
    </>
  );
};

export default User;
