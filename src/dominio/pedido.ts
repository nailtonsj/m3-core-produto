import { Produto } from "./produto";
import { EstoqueDoPedido } from "./estoque";

class ItemPedido{
  readonly produto: Produto;
  readonly quantidade: number;

  constructor(produto:Produto, quantidade:number){
    if (quantidade <= 0){
      throw new Error(`Quantidade do item ${produto.nome} precisa ser maior que zero!`)
    }
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
  private itens: ItemPedido[] = [];
  private status: "aberto" | "finalizado" = "aberto";
  private estoque: EstoqueDoPedido;


  constructor(estoque: EstoqueDoPedido) {
    this.estoque = estoque;
  }
  adicionar(produto: Produto, quantidade: number): boolean {
    if (this.status === "finalizado") {
      return false;
    }
    if (this.estoque.disponivel(produto.nome) < quantidade) {
      return false;
    }
    this.itens.push(new ItemPedido(produto, quantidade));
    return true;
  }

  // adicionar(produto:Produto, quantidade:number): void {
  //   if (this.status !== "aberto"){
  //   throw new Error(`Não foi possível adicionar o produto ${produto.nome}`)
  //   }
  //   this.itens.push(new ItemPedido(produto, quantidade));
  // }

  total(): number {
    let soma = 0;
    for (let i = 0; i < this.itens.length; i++) {
      soma = soma + this.itens[i].subtotal();
    }
    return soma;
  }

  finalizar(){
    for (let i = 0; i < this.itens.length; i++) {
      let produtoARetirar = this.itens[i].produto.nome;
      let quantidadeARetirar = this.itens[i].quantidade;
      this.estoque.saida(produtoARetirar, quantidadeARetirar);
      // if (this.estoque.disponivel(this.itens[i].produto.nome) <= 0){}
    }
    this.status = "finalizado";
  }

  resumo(): string {
    return `${this.itens.length} itens · total em centavos: ${this.total()} · status: ${this.status}` ;
  }
}











// module.exports = { adicionar, total, resumo };
