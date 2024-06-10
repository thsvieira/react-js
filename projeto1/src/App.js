import React, { Component } from 'react';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarCadastro: null
    };
    this.handleCadastro = this.handleCadastro.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleCadastro() {
    this.setState({ mostrarCadastro: true });
  }

  handleLogin() {
    this.setState({ mostrarCadastro: false });
  }

  primeiroAcesso() {
    return (
      <div>
        <h3>Primeiro Acesso?</h3>
        <br />
        <button onClick={this.handleCadastro}>SIM</button>
        <button onClick={this.handleLogin}>NÃO</button>
      </div>
    );
  }

  render() {
    const { mostrarCadastro } = this.state;
    return (
      <div>
        <h1>SALA DE AULA VIRTUAL</h1>
        <br /><br /><br />
        {mostrarCadastro === null ? (
          this.primeiroAcesso()
        ) : mostrarCadastro ? (
          <Cadastro />
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
