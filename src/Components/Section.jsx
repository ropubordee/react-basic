import React, { useState } from "react";
import { create } from "zustand";
const Store = (set) => {
  return {
    fname: "Pubordee-dev",
    lname: "Srisurach",
    setName: (newvalue) => set({ fname: newvalue }),
  };
};
const useStore = create(Store);
const Section = () => {

  const [text,setText] = useState('')

  const fanme = useStore((state) => state.fname);
  const lname = useStore((state) => state.lname);
  const setName = useStore((state) => state.setName);

  const handSetName = () => {
    setName(text);
  };
  const handleChange = (e)=>{
   setText(e.target.value);
    
  }

  return (
    <div>
      <h1>
        {fanme}
        {lname}
      </h1>
      <input  onChange={handleChange}type="text" />
      <button onClick={handSetName}>Set Name</button>
    </div>
  );
};

export default Section;
