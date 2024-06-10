import { Component } from "react";
import './App.css'
import biscoitoImg from './assets/biscoito.png'
import Botao from "./components/Botao";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: 'Clique no botão para abrir um biscoito da sorte!'
    }
    this.atualizarFrase = this.atualizarFrase.bind(this);
  }

  atualizarFrase(novaFrase) {
    this.setState({ frase: novaFrase });
  }

  render(){
    return(
      <div className="container">
        <img src={biscoitoImg} alt="Biscoito" className="img"/>
        <Botao abrirBiscoito={this.atualizarFrase}/>
        <h3 className="frase">{this.state.frase}</h3>
      </div>
    );
  }
}

export default App;