// src/components/button.js
import React from "react";

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
      return "w-16 h-16 md:w-32 md:h-32"
    if (forma === "comprimido")
      return "w-32 h-16 md:w-64 md:h-32"
  }
  handleClick(event) {
    event.preventDefault()
    this.props.getValor()
  }
  render() {
    const corBtn = this.getCor()
    const formato = this.getFormato()
    return (
        <button onClick={this.handleClick.bind(this)}
          className={formato + " " + corBtn + " font-mono focus:outline-none rounded-full m-1 text-white text-3xl md:text-5xl"}
        >
          {this.props.children}
        </button>
    );
  }
}

export default Button