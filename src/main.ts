import { Catalogo } from "./dominio/catalogo";

/**
 * Ponto de entrada principal da aplicação.
 * Responsável por inicializar os componentes do sistema.
 */
function iniciar() {
  console.log("Iniciando Sistema de Produtos...");
  
  try {
    const catalogo = new Catalogo("dados/produtos.json");
    console.log(`${catalogo.produtos.length} produtos carregados no catálogo.`);

    // Teste inicial de busca para validar o funcionamento
    const produtoExemplo = "arroz 5 kg";
    const preco = catalogo.precoDe(produtoExemplo);
    
    if (preco !== undefined) {
      console.log(`Preço de "${produtoExemplo}": R$ ${preco.toFixed(2)}`);
    } else {
      console.log(`Produto "${produtoExemplo}" não encontrado no catálogo.`);
    }

  } catch (error) {
    console.error("Erro ao inicializar o sistema:", error);
  }
}

iniciar();
