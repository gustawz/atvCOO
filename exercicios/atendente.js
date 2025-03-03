import { Trabalhador } from './trabalhador.js';

export class Atendente extends Trabalhador {
    constructor(nome, idade, identidade) {
        super(nome, idade, identidade);
    }

    servir() {
        console.log(`${this.nome} está atendendo clientes...`);
    }
}
