import { Nav } from "../nav/Nav";
import React from "react";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className={"navbar"}>
      <div className={"navbar_wrapper container"}>
        <div className="brand">
          <b>React</b>
          Notes
        </div>
        <Nav />
      </div>
    </div>
  );
}
