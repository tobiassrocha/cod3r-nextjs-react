interface Humano {
  nome: string;
  idade?: number; // a interrogação quer dizer que o atributo não é obrigatório
  [prop: string]: any; // usado para propriedades com nome dinâmico
  saudar?(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Tobaias";
}

const pessoa = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Tobaias Rock");

// classes
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Testando";
saudarComOla(meuCliente);
meuCliente.saudar("Da Silva");
console.log(meuCliente.ultimaCompra);

// interfaces função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  // Math.pow(3, 10)
  // 3 ** 10
  return Array(exp) // quantidade de itens no array, baseado no expoente
    .fill(base) // preenche o array com o valor da base
    .reduce((t, a) => t * a); // multiplica cada um dos itens do array
};

console.log(potencia(3, 10));
