class Precos{
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

  resumo() {
    return this.nomes.length + " itens · total em centavos: " + this.total();
  }
}















const listaUm = new Precos()

listaUm.adicionar("arroz 5 kg", 2490, 1);
listaUm.adicionar("feijão 1 kg", 799, 2);
listaUm.adicionar("banana", 890, 2);
console.log(listaUm.resumo());

// module.exports = { adicionar, total, resumo };
