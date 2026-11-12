# Documentação: Refatoração Catálogo (E22)

## Resumo da Atividade
Foi realizada a refatoração do arquivo legado de JavaScript (`legado/catalogo.js`) para TypeScript, convertendo o sistema de funções avulsas em uma **Classe** orientada a objetos.

## Passos Realizados

1. **Criação da Classe (`src/dominio/catalogo.ts`):**
   - Importação do módulo `fs`.
   - Criação da classe `Catalogo`.
   - A função `carregar(caminho)` foi transformada no `constructor`, responsável por ler o arquivo JSON e armazenar a lista no atributo `this.produtos`. O atributo foi tipado provisoriamente como `any[]`.
   - A função `buscar(produtos, nome)` foi encapsulada no método `buscar(nome: string)`, acessando os dados usando `this.produtos`.
   - A função `precoDe(produtos, nome)` virou o método `precoDe(nome: string): number`.

2. **Criação e Adaptação dos Exemplos (`src/exemplos/catalogo.ts`):**
   - Instanciação da classe usando `new Catalogo("dados/produtos.json")`.
   - Correção do erro de execução alterando a busca de `"feijao 1 kg"` (sem acento) para `"feijão 1 kg"` (com acento), garantindo que o método encontre o produto e não quebre a aplicação.

3. **Mapeamento de Defeitos (Para o Pull Request):**
   - **Defeito que o TypeScript não pega:** O atributo tipado como `any[]` mascara as propriedades reais do produto durante o desenvolvimento.
   - **Defeito de execução (runtime):** Buscar um produto inexistente retorna `undefined`, gerando um erro ao tentar acessar a propriedade `.preco_centavos` sem validação.

4. **Versionamento:**
   - Criação de branch a partir da `main`.
   - Commit realizado com a mensagem padronizada: `refactor(catalogo): a peça vira classe`.