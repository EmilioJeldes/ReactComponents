import React from "react";
import "./Nav.css";

export function Nav() {
  return (
    <nav className={"nav"}>
      <ul className="menu_container">
        <li className="menu_item">
          <button className="menu_link">Login</button>
        </li>
      </ul>
    </nav>
  );
}
