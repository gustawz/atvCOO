import { Trabalhador } from './trabalhador.js';

export class Limpeza extends Trabalhador {
    constructor(nome, idade, identidade) {
        super(nome, idade, identidade);
    }

    higienizar() {
        console.log(`${this.nome} está realizando a limpeza do ambiente...`);
    }
}
