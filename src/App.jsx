import React, { useState } from "react";

const App = () => {
  const name = "pubordee";
  const [age, setAge] = useState(30);

  return (
    <>
      <h1>สวัสดีครับคุณ {name}</h1>
      <h2>อายุ : {age} ปั</h2>
      <button onClick={() => setAge(age + 1)}>เพิ่ม</button>
      <button onClick={() => setAge(age - 1)}>ลด</button>
      <button onClick={() => setAge(30)}>เคลียร์</button>
    </>
  );
};

export default App;
