import React, { useState } from "react";
import Header from "./Components/Header";
import PersonList from "./Components/PersonList";
import './App.css'
import './index.css'

const App = () => {
    const [data, setData] = useState([
    { id: 1, name: "pubordee", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);
  return (
    <div className="App">
      <Header title='PersonApp' />
      <main>
        <PersonList data={data}/>
      </main>
    </div>
  );
};

export default App;
