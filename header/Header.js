import React, { Component } from "react";
import "./Header.css";
import { Navbar } from "../navbar/Navbar";
import SearchBar from "../searchbar/SearchBar";

class Header extends Component {
  render() {
    return (
      <div className={"header"}>
        <Navbar />
        <SearchBar />
      </div>
    );
  }
}

export default Header;
