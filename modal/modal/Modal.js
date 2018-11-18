import React, { Component } from "react";
import ReactDOM from "react-dom";
import { store } from "../../index";
import { Provider } from "react-redux";
import "./Modal.css";

class Modal extends Component {
  _render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <div ref={this.setWrapperRef} className={"modal"}>
          {this.props.children}
        </div>
      </Provider>,
      this.modalTarget
    );
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onCLose();
    }
  };

  componentDidMount() {
    this.modalTarget = document.createElement("div");
    this.modalTarget.className = "overlay";
    document.body.appendChild(this.modalTarget);
    this._render();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    this._render();
  }

  componentWillUpdate(nextProps, nextState) {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return <noscript />;
  }
}

export default Modal;
