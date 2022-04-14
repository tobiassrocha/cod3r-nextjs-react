// string
let nome: string = "João";
console.log(nome);
// nome = 28 - tipo inferido pelo ts

// numbers
let idade: number = 27;
// idade = "Ana";
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explicitos
let minhaIdade: any;
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = "idadeee";
console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100];
// hobbies = 100;
console.log(hobbies);

// tuplas - é um array de tipos pré-definidos
let endereco: [string, Number] = ["Av brasil", 99];
console.log(endereco);

endereco = ["rua tal", 2132];
console.log(endereco);

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 10, // 10
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);

carro = { marca: "BMW", ano: 2018 };
console.log(carro);
