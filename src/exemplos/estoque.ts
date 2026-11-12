import { Estoque } from "../dominio/estoque";

const estoque = new Estoque();

estoque.entrada("arroz 5 kg", 10);
estoque.entrada("arroz 5 kg", 5);
estoque.saida("arroz 5 kg", 3);
console.log(estoque.disponivel("arroz 5 kg"));
estoque.entrada("feijão 1 kg", 4);
estoque.saida("feijão 1 kg", 9);
console.log(estoque.disponivel("feijão 1 kg"));