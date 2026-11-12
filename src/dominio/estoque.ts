// legado/estoque.js · quanto tem de cada produto
export interface ItemEstoque {
  nome: string;
  quantidade: number;
}

export interface EstoqueDoPedido {
  disponivel(nome: string): number;
  saida(nome: string, quantidade: number): boolean;
}

export class Estoque implements EstoqueDoPedido {
  private itens: ItemEstoque[] = [];

  private posicao(nome: string): number {
    // console.log(this.itens.findIndex(item => item.nome === nome))
    
    return this.itens.findIndex(item => item.nome === nome);
  }

  entrada(nome: string, quantidade: number): boolean {
    if (quantidade <= 0) {
      return false
    }
    const i = this.posicao(nome);
    if (i === -1) {
      this.itens.push({ nome: nome, quantidade: quantidade })
      return true
    }
    else {
      this.itens[i].quantidade = this.itens[i].quantidade + quantidade;
      return true
    }
  }

  saida(nome: string, quantidade: number): boolean {
    if (quantidade <= 0 || quantidade > this.disponivel(nome)) {
      return false
    }
    const i = this.posicao(nome);
    this.itens[i].quantidade = this.itens[i].quantidade - quantidade;
    return true
  }

  disponivel(nome: string): number {
    const i = this.posicao(nome);
    return this.itens[i].quantidade
  }

}




