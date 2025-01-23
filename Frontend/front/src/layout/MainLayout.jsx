import React from "react";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default MainLayout;
