import { Individuo } from './individuo.js';

export class Consumidor extends Individuo {
    constructor(nome, idade, identidade) {
        super(nome, idade);
        this.identidade = identidade;
    }

    alimentar() {
        console.log(`${this.nome} está degustando uma refeição...`);
    }
}
