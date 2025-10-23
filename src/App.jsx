import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import PersonList from "./Components/PersonList";
import "./App.css";
import "./index.css";
import AddForm from "./Components/AddForm";

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "pubordee", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);
  const deleteUser = (id) => {
    const result = data.filter((user) => user.id !== id);
    setData(result);
  };
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");
  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <div className="App">
        <Header title="PersonApp" theme={theme} setTheme={setTheme} />
        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
};

export default App;
