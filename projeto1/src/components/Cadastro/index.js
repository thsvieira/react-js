import { Component } from "react";

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                nome: '',
                email: '',
                senha1: '',
                senha2: '',
                telefone: '',
                curso: ''
            }

        }
        this.cadastrar = this.cadastrar.bind(this);
        this.alterarDados = this.alterarDados.bind(this);
    }

    cadastrar(event) {
        const { nome, email, telefone, curso, senha1, senha2 } = this.state.form;
        if (this.state.form.senha1 !== this.state.form.senha2) {
            event.preventDefault();
            alert('As senhas precisam ser idênticas!');
            return;
        }

        if (!nome && !email && !telefone && !curso && !senha1 && !senha2) {
            event.preventDefault();
            alert('Todos os campos precisam ser preenchidos!');
            return;
        } else {
            alert(`Confirme os dados: \n
            Nome: ${nome} \n
            Email: ${email} \n
            Telefone: ${telefone} \n
            Curso: ${curso} \n
            `);
        }
    }

    alterarDados(event) {
        let form = this.state.form
        form[event.target.name] = event.target.value;
        this.setState({form: form})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.cadastrar}>
                    <label id="nome">Nome: </label>
                    <input type="text" name="nome" value={this.state.nome}
                        onChange={this.alterarDados} /> <br />

                    <label id="email">Email: </label>
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.alterarDados} /> <br />

                    <label id="senha1">Senha: </label>
                    <input type="password" name="senha1" value={this.state.senha1}
                        onChange={this.alterarDados} /> <br />

                    <label id="senha2">Confirmar Senha: </label>
                    <input type="password" name="senha2" value={this.state.senha2}
                        onChange={this.alterarDados} /> <br />

                    <label id="telefone">Telefone: </label>
                    <input type="phone" name="telefone" value={this.state.telefone}
                        onChange={this.alterarDados} /> <br />

                    <select name="curso" onChange={this.alterarDados}>
                        <option value='Administração'>Administração</option>
                        <option value='Análise e Desenvolvimento de Sistemas'>Análise e Desenvolvimento de Sistemas</option>
                        <option value='>Biologia'>Biologia</option>
                        <option value='Matemática'>Matemática</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit">CADASTRAR</button>
                </form>
            </div>
        );
    }
}

export default Cadastro