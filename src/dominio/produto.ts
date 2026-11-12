// legado/produto.js · escrito em JavaScript, do jeito do Módulo 2

export class Produto {
  readonly nome: string
  readonly precoCentavos: number
  readonly unidade: "kg"|"un"
  readonly categoria: "mercearia"|"hortifruti"|"laticínios"

  constructor(nome: string, precoCentavos: number, unidade: "kg"|"un", categoria: "mercearia"|"hortifruti"|"laticínios") {
    if (precoCentavos < 0) {
      throw new Error("Preço negativo: " + nome)
    }
    this.nome = nome
    this.precoCentavos = precoCentavos
    this.unidade = unidade
    this.categoria = categoria
  }
  precoEmReais(): string {
    return "R$ " + (this.precoCentavos / 100).toFixed(2)
  }
  precoPorQuantidade(quantidade: number): number {
    if (quantidade <= 0) {
      throw new Error("A quantidade deve ser maior que zero")
    }
    return this.precoCentavos * quantidade
  }
}

// use para testa
