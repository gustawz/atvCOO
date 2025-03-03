export class Individuo {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fala() {
        console.log(`${this.nome} está conversando...`);
    }
}
