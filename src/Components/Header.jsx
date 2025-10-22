import React from "react";
import "./StyleCss/Header.css";
const Header = ({title,theme,setTheme}) => {

  const toggleTheme =()=>{
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  return (
    <nav>
      <h1>{title}</h1>
      <button onClick={toggleTheme}>สลับโหมด : {theme}</button>
    </nav>
  );
};

export default Header;
