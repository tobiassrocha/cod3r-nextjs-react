"use strict";
// string
let nome = "João";
console.log(nome);
// nome = 28 - tipo inferido pelo ts
// numbers
let idade = 27;
// idade = "Ana";
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = "idadeee";
console.log(typeof minhaIdade);
// array
let hobbies = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100;
console.log(hobbies);
// tuplas - é um array de tipos pré-definidos
let endereco = ["Av brasil", 99];
console.log(endereco);
endereco = ["rua tal", 2132];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2018 };
console.log(carro);
