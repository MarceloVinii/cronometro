import React, { Component } from "react"
import image from "./assets/biscoito.png"
import "./style.css"

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: "",
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O riso é a menor distancia entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredito em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
      "O sucesso é treinável.",
      "Saúde, família e trabalho, não inverta a ordem.",
    ]
  }

  quebraBiscoito() {
    let state = this.state
    // a variavel recebe a quantidade de frases do array vezes(*) o numero aleatório gerado, deixando um numero inteiro.
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    //atualizando a state com o novo valor
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={image} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

export class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}
