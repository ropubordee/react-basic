import React, { useState } from "react";
import useStore from "../Store/pubordeeStore";

const Section4 = () => {
    const [text,setText] = useState('')
  const arr2 = useStore((state) => state.arr2);
  const addObj = useStore((state) => state.addObj);
  const delObj = useStore((state)=>state.delObj)

  const handleAddObj = () => {
    addObj(text);
  };
  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleDel =(id)=>{
    delObj(id)
  }

  return (
    <div>
      <h1>Todo {arr2.length}</h1>
      <input type="text" onChange={handleChange} />
      <p>
        <button onClick={handleAddObj}>Add Todo</button>
      </p>
      {
        arr2.map((item,index)=>(
            <li key={index}>{item.title} <button onClick={()=>handleDel(item.id)}>Dele</button></li>
        ))
      }
    </div>
  );
};

export default Section4;
