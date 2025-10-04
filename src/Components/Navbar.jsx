import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <NavLink to="/">Home</NavLink>
      <div className="flex gap-5">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <button>Log out</button>
    </div>
  );
};

export default Navbar;
