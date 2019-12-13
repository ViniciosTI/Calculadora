// src/App.js
import React from "react";
import Button from "./componentes/button";

class App extends React.Component {
  state = {
    calc: "",
    num: "0"
  }
  getNumero(val) {// 0...9
    let st = this.state
    if (st.num == "0" && val != ",") st.num = ""
    if (!st.num.includes(",") || (st.num.includes(",") && val != ",")) this.setValor(val)
  }
  getOperacao(val) { // + - * / %
    let st = this.state
    if(!Number.isInteger(st.calc.substring(st.calc.length-1)) && st.num != "0"){
      let c = st.num + val
      this.setState({ calc: st.calc + c })
      this.setState({ num: "0" })
    }
  }
  mudaSinal() { // ±
    let st = this.state
    if (st.num != "0") {
      if (st.num.includes("-")) this.setState({ num: st.num.substring(1) })
      if (!st.num.includes("-")) this.setState({ num: "-" + st.num })
    }
  }
  limpaConteudo() { // ac
    this.setState({
      calc: "",
      num: "0"
    })
  }
  setValor(val) {
    this.setState({
      num: this.state.num + val
    })
  }

  render() {
    const { num, calc } = this.state
    return (
      <div className={"py-12 items-center"}>
        <div className="flex flex-col mx-auto">
          <input style={{ paddingRight: "25%" }}
            className="text-right w-full text-2xl md:text-3xl lg:text-4xl bg-transparent text-gray-600" type="text" disabled value={calc} />
        </div>
        <div className="flex flex-col mx-auto ">
          <input style={{ paddingRight: "25%" }}
            className="text-right px-16 md:px-32 lg:px-64 w-full text-3xl md:text-4xl lg:text-5xl bg-transparent text-white" type="text" disabled value={num} />
        </div>
        <div className="flex flex-col mx-auto items-center">
          <div>
            <Button getValor={() => this.limpaConteudo()} cor="cinza">
              AC
        </Button>
            <Button getValor={() => this.mudaSinal()} cor="cinza">
              ±
        </Button>
            <Button getValor={() => this.getOperacao("%")} cor="cinza">
              %
        </Button>
            <Button getValor={() => this.getOperacao("/")} cor="amarelo">
              /
        </Button >
          </div>
          <div className="w-auto">
            <Button getValor={() => this.getNumero("9")}>
              9
        </Button>
            <Button getValor={() => this.getNumero("8")}>
              8
        </Button>
            <Button getValor={() => this.getNumero("7")}>
              7
        </Button>
            <Button getValor={() => this.getOperacao("x")} cor="amarelo">
              x
        </Button>
          </div>
          <div className="w-auto">
            <Button getValor={() => this.getNumero("6")}>
              6
        </Button>
            <Button getValor={() => this.getNumero("5")}>
              5
        </Button>
            <Button getValor={() => this.getNumero("4")}>
              4
        </Button>
            <Button getValor={() => this.getOperacao("-")} cor="amarelo">
              -
        </Button>
          </div>
          <div className="w-auto">
            <Button getValor={() => this.getNumero("3")}>
              3
        </Button>
            <Button getValor={() => this.getNumero("2")}>
              2
        </Button>
            <Button getValor={() => this.getNumero("1")} >
              1
        </Button>
            <Button getValor={() => this.getOperacao("+")} cor="amarelo">
              +
        </Button>
          </div>
          <div className="w-auto">
            <Button getValor={() => this.getNumero("0")} forma="comprimido">
              0
        </Button>
            <Button getValor={() => this.getNumero(",")}>
              ,
        </Button>
            <Button getValor={() => this.calcula("=")} cor="amarelo">
              =
        </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;