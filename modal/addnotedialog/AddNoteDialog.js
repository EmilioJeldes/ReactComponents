import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./AddNoteDialog.css";
import Modal from "../modal/Modal";

import { createNote, fetchNotes } from "../../redux/actions/index";

class AddNoteDialog extends Component {
  state = {
    open: false,
    text: "",
    editing: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open && !this.state.editing) {
      this.setState({ editing: true });
      document.addEventListener("keypress", this.handleKeyPressed);
    } else {
      !this.state.editing &&
        document.removeEventListener("keypress", this.handleKeyPressed);
    }
  }

  handleKeyPressed = e => {
    if (this.textArea) {
      if (e.keyCode === 13 && document.activeElement === this.textArea) {
        this.handleSubmit();
      }
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeText = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    this.handleClose();
    const note = {
      id: null,
      note: this.state.text.trim(),
      createAt: null
    };
    this.setState({ text: "", editing: false });
    this.props.createNote(note);
  };

  getTextAreaRef = node => {
    this.textArea = node;
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.handleOpen} className={"floating_button"}>
          +
        </button>
        {this.state.open && (
          <Modal open={this.state.open} onCLose={this.handleClose}>
            <div className={"note_wrapper"}>
              <h2 className={"note_title"}>Create a note...</h2>
              <form>
                <textarea
                  className={"note_description"}
                  cols="30"
                  rows="10"
                  placeholder={"Add note description"}
                  value={this.state.text}
                  onChange={this.handleChangeText}
                  autoFocus={true}
                  ref={this.getTextAreaRef}
                />

                <input
                  className={"note_btn"}
                  onClick={this.handleSubmit}
                  type={"button"}
                  value={"Create"}
                />
              </form>
            </div>
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default connect(
  null,
  { createNote, fetchNotes }
)(AddNoteDialog);
