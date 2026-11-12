export class Pedido{
  nomes:string[] = [];
  precos:number[] = [];
  quantidades:number[] = [];

  adicionar(nome:string, precoCentavos:number, quantidade:number): void {
    this.nomes.push(nome);
    this.precos.push(precoCentavos);
    this.quantidades.push(quantidade);
  }

  total(): number {
    let soma = 0;
    for (let i = 0; i < this.nomes.length; i++) {
      soma = soma + this.precos[i] * this.quantidades[i];
    }
    return soma;
  }

  resumo(): string {
    return this.nomes.length + " itens · total em centavos: " + this.total();
  }
}






// module.exports = { adicionar, total, resumo };
