import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const RootLayouts = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <header>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default RootLayouts;
