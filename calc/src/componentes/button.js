// src/components/button.js
import React from "react";
import { render } from "react-dom";

class Button extends React.Component {
  getCor() {
    const { cor } = this.props;
    if (cor === undefined)
      return "bg-gray-700 hover:bg-gray-600"
    if (cor === "amarelo")
      return "bg-yellow-600 hover:bg-yellow-500"
    if (cor === "cinza")
      return "bg-gray-500 hover:bg-gray-400"
  }
  getFormato() {
    const { forma } = this.props;
    if (forma === undefined)
      return "w-16 h-16 rounded-full "
    if (forma === "comprimido")
      return "w-32 h-16 rounded-full"

  }
  render() {
    const corBtn = this.getCor()
    const formato = this.getFormato()
    return (
        <button
          className={"focus:outline-none " + formato + " inline px-2 py-1 m-1  text-white text-lg font-light " + corBtn}

        >
          {this.props.children}
        </button>
    );
  }
}

export default Button