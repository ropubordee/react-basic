import React, { useState } from "react";
import "./StyleCss/AddForm.css";
const AddForm = ({data,setData}) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("ชาย");
  const saveData = (e) => {
    e.preventDefault();
    const Person = {
      id : data.length+1,
      name: name,
      gender: gender,
    };
    // console.log(Person);
    setData([...data,Person])
    setName("")
    setGender("ชาย")
  };
  return (
    <section className="container">
      <form onSubmit={saveData}>
        <label>ชื่อประชากร</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>ชาย</option>
          <option>หญิง</option>
        </select>
        <button
          type="submit"
          className="btn-save"
          disabled={name.trim() === ""}
        >
          บันทึก
        </button>
      </form>
    </section>
  );
};

export default AddForm;
