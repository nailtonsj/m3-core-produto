import {Estoque} from "./estoque"
import {Catalogo} from "./catalogo"
import {Pedido} from "./pedido"
import { Produto } from "./produto";

const catalogo = new Catalogo("dados/produtos.json");

console.log(catalogo.quantidade() + " produtos no catálogo;");

const estoque = new Estoque();
estoque.entrada("arroz 5 kg", 5);
estoque.entrada("feijão 1 kg", 8);
estoque.entrada("banana", 3);

console.log(estoque)

const pedido = new Pedido(estoque);

function comprar(nome: string, quantidade: number): void {
 const produto = catalogo.buscar(nome);
 if (produto === undefined) {
 console.log(nome + ": não está no catálogo");
 } else if (pedido.adicionar(produto, quantidade)) {
 console.log(nome + ": " + quantidade + " no pedido");
 } else {
    console.log(nome + ": só tem " + estoque.disponivel(nome) + " no estoque");
 
 }
 }

 comprar("arroz 5 kg", 1);
 comprar("feijão 1 kg", 2);
 comprar("banana", 1);
 
 pedido.finalizar();
 console.log(pedido.resumo());