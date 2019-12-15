// src/App.js
import React from "react";
import Button from "./componentes/button";

class App extends React.Component {
  state = {
    calc: [],
    num: "0",
    f: true
  }
  /*
    val -> item novo que será ou não colocado no this.state.num
  */
  getNumero(val) {// 0...9
    let st = this.state
    if ((st.num === "0" && val !== ",") || st.f === true) {
      st.num = ""
      st.f = false
    }
    if (!Number.isInteger(parseInt(st.calc[st.calc.length - 1])) &&
      (!st.num.includes(",") || (st.num.includes(",") && val !== ","))) this.setValor(val)
    if (Number.isInteger(parseInt(st.calc[st.calc.length - 1]))) this.mudaUltimoValor(val)
  }
    /*
  muda o ultimo valor já colocado no calculo
   */
  mudaUltimoValor(val) {
    let c = this.state.calc
    c.pop()
    this.setState({ calc: c, num: val })
  }
  /*
    val -> item que servirá de operado para o calculo
  */
  getOperacao(val) { // + - * / %
    let st = this.state
    let aux = st.calc
    if (st.num !== "0" && !Number.isInteger(parseInt(st.calc[st.calc.length - 1]))) aux.push(st.num)
    if (Number.isInteger(parseInt(st.calc[st.calc.length - 1]))) aux.push(val)
    if (!Number.isInteger(parseInt(st.calc[st.calc.length - 1]))) this.mudaUltimoOperador(val)
    this.setState({
      calc: aux,
      num: "0",
      f: false
    })
  }
  /*
  muda o ultimo operador já colocado no calculo
   */
  mudaUltimoOperador(val) {
    let c = this.state.calc
    c.pop()
    c.push(val)
    this.setState({ calc: c, num: val })
  }
  /*
    troca o sinal do valor this.state.num
  */
  mudaSinal() { // ±
    let st = this.state
    if (st.num !== "0") {
      if (st.num.includes("-")) this.setState({ num: st.num.substring(1) })
      if (!st.num.includes("-")) this.setState({ num: "-" + st.num })
    }
  }
  /*
    limpa os valores de this.state.calc e this.state.num
  */
  limpaConteudo() { // ac
    this.setState({
      calc: [],
      num: "0"
    })
  }
  /*
    val -> item que será colocado ao valor de this.state.num
  */
  setValor(val) {
    this.setState({
      num: this.state.num + val
    })
  }
  /*
    envia os dados para a api resolver os calculos
  */
  calcula() {
    fetch("http://localhost:8000/api/calcular", {
      method: 'POST',
      body: JSON.stringify(this.montaObjeto())
    })
      .then(res => res.json())
      .then(res => this.setState({ calc: [], num: res.toString(), f: true }))
  }
  /*
    envia os dados para a api resolver a porcentagem
  */
  porcentagem() {
    let st = this.state
    fetch("http://localhost:8000/api/porcentagem", {
      method: 'POST',
      body: JSON.stringify(this.montaObjeto())
    })
      .then(res => res.json())
      .then(res => {
        let c = this.state.calc
        c.push(res)
        this.setState({
          calc: c,
          num: res.toString(),
          f: true
        })
      })
  }
  /*
    return -> monta uma string com a lista do state this.state.calc
  */
  montaString() {
    let st = this.state
    let r = ""
    for (let i in st.calc) {
      r += " " + st.calc[i]
    }
    if (r.trim() !== "")
      return r.trim()
    if (r.trim() === "")
      return st.num
  }
  /*
    return -> monta um objeto com a lista do state this.state.calc
  */
  montaObjeto() {
    let st = this.state
    let o = {}
    for (let i in st.calc) {
      o[i] = st.calc[i]
    }
    o[st.calc.length] = st.num
    return o
  }

  render() {
    const { num } = this.state
    return (
      <div className={"py-12 items-center"}>
        <div className="flex flex-col mx-auto">
          <input style={{ paddingRight: "25%" }}
            className="text-right w-full text-2xl md:text-3xl lg:text-4xl bg-transparent text-gray-600" type="text" disabled value={
              this.montaString()
            } />
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
            <Button getValor={() => this.porcentagem()} cor="cinza">
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
            <Button getValor={() => this.calcula()} cor="amarelo">
              =
        </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;