import React, { useState } from "react";
import Header from "./Components/Header";
import PersonList from "./Components/PersonList";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <PersonList />
      </main>
    </div>
  );
};

export default App;
