// src/App.js
import React from "react";
import Button from "./componentes/button";

class App extends React.Component {
  state={
    num : "0"
  }

  getNumero(i){
    console.log(i)
    // let num = this.state
    // if(num === "0") num = ""
    // this.setState({
    //   num : num+i
    // })
  }

  render() {
    const {num} = this.state
    console.log(num)
    return (
      <div className=" bg-gray-900 flex flex-col w-screen h-full mx-auto my-2 items-center">
        <h1 className="text-white">Calculadora</h1>
        <div>
          <input className="text-right text-lg bg-transparent text-white" type="text" value={num} />
        </div>
        <div>
          <Button cor="cinza">
            AC
        </Button>
          <Button cor="cinza">
            +/-
        </Button>
          <Button cor="cinza">
            %
        </Button>
          <Button cor="amarelo">
            /
        </Button >
        </div>
        <div >
          <Button>
            9
        </Button>
          <Button>
            8
        </Button>
          <Button>
            7
        </Button>
          <Button cor="amarelo">
            x
        </Button>
        </div>
        <div>
          <Button>
            6
        </Button>
          <Button>
            5
        </Button>
          <Button>
            4
        </Button>
          <Button cor="amarelo"> 
            -
        </Button>
        </div>
        <div>
          <Button>
            3
        </Button>
          <Button>
            2
        </Button>
          <Button onClick={() => this.getNumero("1")} >
            1
        </Button>
          <Button cor="amarelo">
            +
        </Button>
        </div>
        <div>
          <Button forma="comprimido">
            0
        </Button>
          <Button>
            ,
        </Button>
          <Button cor="amarelo">
            =
        </Button>
        </div>
      </div>
    );
  }
}

export default App;