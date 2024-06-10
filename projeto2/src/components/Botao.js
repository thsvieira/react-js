import { Component } from "react";

class Botao extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textoFrase: ''
        }

        this.frases = ['Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'];

        this.abrirBiscoito = this.abrirBiscoito.bind(this);
    }

    abrirBiscoito() {
        const { abrirBiscoito } = this.props;
        const numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        const novaFrase = this.frases[numeroAleatorio];
        abrirBiscoito(novaFrase);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.abrirBiscoito()}>ABRIR BISCOITO</button>
            </div>
        );
    }
}

export default Botao;
