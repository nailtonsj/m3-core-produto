import { Catalogo } from "../dominio/catalogo";

const catalogo = new Catalogo("dados/produtos.json");
console.log(catalogo.produtos.length + " produtos carregados");

// Caso normal
console.log(catalogo.precoDe("arroz 5 kg"));

// Caso com o dado errado consertado (com acento, conforme deve estar no JSON)
// Se deixarmos "feijao 1 kg" sem acento, o código quebra rodando pois `buscar` retorna undefined
console.log(catalogo.precoDe("feijão 1 kg"));