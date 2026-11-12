import { Produto } from "./produto";

class ItemPedido{
  produto: Produto;
  quantidade: number;

  constructor(produto:Produto, quantidade:number){
    this.produto = produto;
    this.quantidade = quantidade;

  }

  subtotal(): number{
    return this.produto.precoPorQuantidade(this.quantidade);
  }
}

export class Pedido{
  // nomes:string[] = [];
  // precos:number[] = [];
  // quantidades:number[] = [];
  itens: ItemPedido[] = [];
  status: "aberto" | "finalizado" = "aberto";

  adicionar(produto:Produto, quantidade:number): void {
    if (this.status !== "aberto"){
    throw new Error(`Não foi possível adicionar o produto ${produto.nome}`)
    }
    this.itens.push(new ItemPedido(produto, quantidade));
  }

  total(): number {
    let soma = 0;
    for (let i = 0; i < this.itens.length; i++) {
      soma = soma + this.itens[i].subtotal();
    }
    return soma;
  }

  finalizar(){
    this.status = "finalizado";
  }

  resumo(): string {
    return `${this.itens.length} itens · total em centavos: ${this.total()} · status: ${this.status}` ;
  }
}








// module.exports = { adicionar, total, resumo };
