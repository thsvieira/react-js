import { Component } from "react";

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logado: false,
            email: '',
            senha: '',
            usuario: 'Aluno'
        }
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
        this.emailInput = this.emailInput.bind(this);
        this.senhaInput = this.emailInput.bind(this);
    }


    entrar() {
        if (!this.state.logado) {
            this.setState({ logado: true })
        }
    }

    sair() {
        this.setState({
            logado: false,
            email: '',
            senha: '',
            usuario: 'Aluno'
        });
    }

    emailInput(event) {
        let valorDigitado = event.target.value
        this.setState({ email: valorDigitado })
    }

    senhaInput(event) {
        let valorDigitado = event.target.value
        this.setState({ senha: valorDigitado })
    }

    render() {
        return (
            <div>
                {!this.state.logado ? <div>
                    Email: <input type='email' name='email' value={this.email} onChange={this.emailInput}></input>
                    <br />
                    Senha: <input type='password' name='senha' value={this.senha} onChange={this.senhaInput}></input>
                    <br />
                    Usuario: <select onChange={(event) => this.setState({ usuario: event.target.value })}>
                        <option value='Aluno'>Aluno</option>
                        <option value='Professor'>Professor</option>
                    </select>
                    <br /><br />
                </div> : <h1>SEJA BEM VINDO {this.state.usuario}</h1>}
                {this.state.logado ? (
                    <button onClick={this.sair}>SAIR</button>
                ) : (
                    <button onClick={this.entrar}>ENTRAR</button>
                )}
            </div>
        );
    }

}

export default Login;