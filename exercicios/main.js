import { Consumidor } from './consumidor.js';
import { Atendente } from './atendente.js';
import { Culinario } from './culinario.js';
import { Limpeza } from './limpeza.js';

window.alert("Bem-vindo ao sistema!");

let cliente1 = new Consumidor('André', 30, 101);
let cliente2 = new Consumidor('Sandro', 27, 102);

console.log(cliente1.nome);
console.log(cliente2.nome);

cliente1.alimentar();
cliente2.fala();

let atendente1 = new Atendente('Lucas', 18, 201);
let atendente2 = new Atendente('Bruno', 19, 202);

console.log(atendente1.nome);
console.log(atendente2.nome);

atendente1.servir();
atendente2.servir();

let cozinheiro1 = new Culinario('Fernanda', 32, 301);
let cozinheiro2 = new Culinario('Ricardo', 37, 302);

console.log(cozinheiro1.nome);
console.log(cozinheiro2.nome);

cozinheiro1.prepararPrato();
cozinheiro2.prepararPrato();

let limpeza1 = new Limpeza('Mariana', 41, 401);
let limpeza2 = new Limpeza('Carlos', 38, 402);

console.log(limpeza1.nome);
console.log(limpeza2.nome);

limpeza1.higienizar();
limpeza2.higienizar();
