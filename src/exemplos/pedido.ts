import { Pedido } from "../dominio/pedido";
import { Produto } from "../dominio/produto";
import { Estoque } from "../dominio/estoque";

//ETAPA 1
// const pedido = new Pedido(); 

// pedido.adicionar("arroz 5 kg", 2490, 1);
// pedido.adicionar("feijão 1 kg", 799, 2);
// pedido.adicionar("banana", 890, 2);
// console.log(pedido.resumo());


//ETAPA 2
// const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
// const banana = new Produto("banana", 890, "kg", "hortifruti");
// const pedido = new Pedido();
// pedido.adicionar(arroz, 1);
// pedido.adicionar(banana, 2);
// pedido.finalizar();
// // pedido.adicionar(arroz, 5);
// console.log(pedido.resumo());

// // pedido.status = "pago"

//Etapa 3
//Sem Erro

// const estoque = new Estoque();
// const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
// const banana = new Produto("banana", 890, "kg", "hortifruti");
// estoque.entrada("arroz 5 kg", 3);
// estoque.entrada("banana", 10);
// const pedido = new Pedido(estoque);
// console.log(pedido.adicionar(arroz, 2), pedido.adicionar(banana, 2), pedido.adicionar(arroz, 5));
// pedido.finalizar();
// console.log(pedido.resumo());
// console.log(estoque.disponivel("arroz 5 kg"), estoque.disponivel("banana"));
// console.log(pedido.adicionar(banana, 1));

//Com Erro
const estoque = new Estoque();
const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
const banana = new Produto("banana", 890, "kg", "hortifruti");
estoque.entrada("arroz 5 kg", 3);
estoque.entrada("banana", 10);
const pedido = new Pedido(estoque);
try {
     console.log(pedido.adicionar(arroz, 0), pedido.adicionar(banana, 2), pedido.adicionar(arroz, -4));
   
} catch (error) {
    console.log(`Erro 1°Parte: ${error}`);
}
pedido.finalizar();
console.log(pedido.resumo());
console.log(estoque.disponivel("arroz 5 kg"), estoque.disponivel("banana"));
try {
    console.log(pedido.adicionar(banana, 1));
} catch (error) {
    console.log(`Erro 2°Parte: ${error}`);
}


