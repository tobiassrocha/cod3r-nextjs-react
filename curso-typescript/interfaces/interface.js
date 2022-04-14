"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Tobaias";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Tobaias Rock");
// classes
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Testando";
saudarComOla(meuCliente);
meuCliente.saudar("Da Silva");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp) // quantidade de itens no array, baseado no expoente
        .fill(base) // preenche o array com o valor da base
        .reduce((t, a) => t * a); // multiplica cada um dos itens do array
};
console.log(potencia(3, 10));
