import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchBar.css";

import { filterNotes } from "../../redux/actions";

class SearchBar extends Component {
  state = {
    term: ""
  };

  componentDidUpdate(prevProps, prevState) {
    this.props.filterNotes(this.state.term);
  }

  handleChangeText = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar-container container">
        <input
          value={this.state.term}
          onChange={this.handleChangeText}
          className={"search_bar"}
          type="text"
          placeholder={"Search"}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { filterNotes }
)(SearchBar);
