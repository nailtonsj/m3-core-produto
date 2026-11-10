// legado/produto.js · escrito em JavaScript, do jeito do Módulo 2


exports class produto {
  nome: string;
  precoCentavos: number;
  unidade: string
  categoria: string

  constructor(nome: string, precoCentavos: number, unidade: string, categoria: string) {
    this.nome = nome
    this.precoCentavos = precoCentavos
    this.unidade = unidade
    this.categoria = categoria
  }
  precoEmReais(): string{
    return "R$" + (this.precoCentavos / 100).toFixed(2);
  }
  precoPorQuantidade(quantidade: number): number{
    if (quantidade <= 0) {
      throw new Error("A quatidade deve ser maior que zero");
    }
    return this.precoCentavos * quantidade;
  }
  alterarproduto(nome: string, precoCentavos: number, unidade: string, categoria: string){
    this.nome = nome;
    this.precoCentavos = precoCentavos;
    this.unidade = unidade;
    this.categoria = categoria;
  }
  // opcional 
  adicionarparametro(parametro: string, valor: string): void{
    console.log(`Parâmetro ${parametro}: ${valor}`);
  }
}

// use para testa a classe, caso queira. OBS: sim essa parte foi ia, estava com preguiça
import { Produto } from "./Produto";

const arroz = new Produto(
    "Arroz 5 kg",
    2490,
    "un",
    "mercearia"
);

const banana = new Produto(
    "Banana",
    890,
    "kg",
    "hortifruti"
);

const leite = new Produto(
    "Leite 1 l",
    539,
    "un",
    "laticínios"
);

console.log(arroz.precoEmReais());
console.log(banana.precoEmReais());

console.log(
    leite.precoPorQuantidade(3),
    leite.unidade
);

// Alterando o produto
arroz.alterarProduto(
    "Arroz integral 5 kg",
    2990,
    "un",
    "mercearia"
);

console.log(arroz);
