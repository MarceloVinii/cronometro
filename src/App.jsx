import React, { Component } from "react"
import Image from "./assets/cronometro.png"
import "./style.css"

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      botao: "INICIAR",
    }

    // timer criado para poder armazenar os segundos do cronometro
    this.timer = null

    this.iniciar = this.iniciar.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  iniciar() {
    // essa state é para acessar a state do botão
    let state = this.state
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      state.botao = "INICIAR"
    } else {
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      }, 100)
      state.botao = "PAUSAR"
    }

    this.setState(state)
  }

  zerar() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.numero = 0
    state.botao = "INICIAR"
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={Image} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.iniciar}>
            {this.state.botao}
          </a>
          <a className="botao" onClick={this.zerar}>
            ZERAR
          </a>
        </div>
      </div>
    )
  }
}
