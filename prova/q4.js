/* Questão 4 — Produtos Duplicados
Crie um sistema de produtos que:
• não permita IDs repetidos
• some quantidade automaticamente
• remova produtos
• registre operações */

class Estoque {
    constructor() {
        // Inicializa lista de produtos vazia
        this.produtos = [];
        // Inicializa histórico de operações vazio
        this.registros = [];
    }

    adicionar(produto) {
        // Procura por produto existente com mesmo ID
        const existente = this.produtos.find(
            p => p.id === produto.id
        );

        // Se o produto existe, soma a quantidade
        if (existente) {
            existente.quantidade += produto.quantidade;
        } else {
            // Caso contrário, adiciona o novo produto ao estoque
            this.produtos.push(produto);
        }

        // Registra a operação de adição no histórico
        this.registros.push(`Adicionou produto #${produto.id}`);
    }

    remover(id, quantidade) {
        // Busca o produto pelo ID informado
        const produto = this.produtos.find(
            p => p.id === id
        );

        // Se o produto não existe, lança erro
        if (!produto) {
            throw new Error("Produto inexistente");
        }

        // Se não há quantidade suficiente, lança erro
        if (produto.quantidade < quantidade) {
            throw new Error("Quantidade insuficiente");
        }

        // Subtrai a quantidade removida do estoque
        produto.quantidade -= quantidade;
        // Registra a operação de remoção no histórico
        this.registros.push(`Removeu ${quantidade} unidades`);
    }
}

