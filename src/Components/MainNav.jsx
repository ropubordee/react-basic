import React from "react";
import { Link, Outlet } from "react-router-dom";
import './StyleCss/MainNav.css'
const MainNav = () => {
  return (
  <div className="header-nav">
    <div className="Logo">
      <h2>ManNavLogo</h2>
    </div>
    <div className="Nav">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </div>
  );
};

export default MainNav;
