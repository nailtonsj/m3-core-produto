import { Pedido } from "../dominio/pedido";
import { Produto } from "../dominio/produto";

//ETAPA 1
// const pedido = new Pedido(); 

// pedido.adicionar("arroz 5 kg", 2490, 1);
// pedido.adicionar("feijão 1 kg", 799, 2);
// pedido.adicionar("banana", 890, 2);
// console.log(pedido.resumo());


//ETAPA 2
const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
const banana = new Produto("banana", 890, "kg", "hortifruti");
const pedido = new Pedido();
pedido.adicionar(arroz, 1);
pedido.adicionar(banana, 2);
pedido.finalizar();
// pedido.adicionar(arroz, 5);
console.log(pedido.resumo());

// pedido.status = "pago"
