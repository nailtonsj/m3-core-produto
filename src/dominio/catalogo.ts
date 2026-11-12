
import * as fs from "fs";
export class Catalogo {
  produtos: any[];

  constructor(caminho: string) {
    const texto = fs.readFileSync(caminho, "utf8");
    this.produtos = JSON.parse(texto).dados;
  }

  buscar(nome: string) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].nome === nome) {
        return this.produtos[i];
      }
    }
  }

  precoDe(nome: string): number {
    return this.buscar(nome).preco_centavos;
  }
}
