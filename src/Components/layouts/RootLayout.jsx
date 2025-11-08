import React from "react";
import MainNav from "../MainNav";
import { Outlet } from "react-router-dom";
import HeaderNav from "../HeaderNav";
import IntroTextArea from "../IntroTextArea";

const RootLayout = () => {
  return (
    <div>
      <MainNav />
      <HeaderNav/>
      <IntroTextArea/>
      <Outlet />
    </div>
  );
};

export default RootLayout;
