import React, { useState } from "react";
import Header from "./Components/Header";
import PersonList from "./Components/PersonList";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <PersonList />
      </main>
    </>
  );
};

export default App;
