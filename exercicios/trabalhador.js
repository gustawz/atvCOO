import { Individuo } from './individuo.js';

export class Trabalhador extends Individuo {
    constructor(nome, idade, identidade) {
        super(nome, idade);
        this.identidade = identidade;
    }
}
