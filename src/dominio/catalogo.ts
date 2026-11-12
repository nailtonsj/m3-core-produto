import * as fs from "fs";
import { Produto } from "./produto";

export class Catalogo {
  produtos: Produto[];

  constructor(caminho: string) {
    const texto = fs.readFileSync(caminho, "utf8");
    const dados = JSON.parse(texto).dados;
    this.produtos = dados.map((d: any) =>
      new Produto(d.nome, d.preco_centavos, d.unidade, d.categoria)
    );
  }

  buscar(nome: string): Produto | undefined {
    return this.produtos.find(p => p.nome === nome);
  }

  precoDe(nome: string): number {
    const produto = this.buscar(nome);
    if (produto === undefined) {
      throw new Error("Produto não encontrado: " + nome);
    }
    return produto.precoCentavos;
  }

  quantidade(): number {
    return this.produtos.length;
  }
}