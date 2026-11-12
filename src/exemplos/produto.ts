import { Produto } from "../dominio/produto"

const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia")
console.log(arroz.precoEmReais())

try {
  const errado = new Produto("feijão 1 kg", -799, "un", "mercearia")
  console.log(errado.precoEmReais())
} catch (erro) {
  console.log("Não criou. " + erro)
}