import { Trabalhador } from './trabalhador.js';

export class Culinario extends Trabalhador {
    constructor(nome, idade, identidade) {
        super(nome, idade, identidade);
    }

    prepararPrato() {
        console.log(`${this.nome} está preparando uma refeição...`);
    }
}
