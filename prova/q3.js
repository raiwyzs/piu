/* Questão 3 — Controle de Biblioteca
Crie um sistema que:
• adiciona livros
• empresta livros
• impede empréstimo sem estoque
• registra operações */

class Biblioteca {
    constructor() {
        // Inicializa a lista de livros como array vazio
        this.livros = [];
        // Inicializa os registros de operações como array vazio
        this.registros = [];
    }

    adicionar(livro) {
        // Procura um livro existente pelo mesmo ID
        const existente = this.livros.find(
            l => l.id === livro.id
        );

        // Se já existe, aumenta a quantidade disponível
        if (existente) {
            existente.quantidade += livro.quantidade;
        } else {
            // Caso contrário, adiciona o novo livro ao estoque
            this.livros.push(livro);
        }

        // Registra a operação de adição no histórico
        this.registros.push(`Adicionou ${livro.quantidade} livros`);
    }

    emprestar(id) {
        // Busca o livro pelo ID solicitado
        const livro = this.livros.find(
            l => l.id === id
        );

        // Verifica se o livro existe na biblioteca
        if (!livro) {
            throw new Error("Livro não encontrado");
        }

        // Verifica se há estoque disponível para empréstimo
        if (livro.quantidade <= 0) {
            throw new Error("Sem estoque");
        }

        // Reduz a quantidade do livro emprestado
        livro.quantidade--;
        // Registra a operação de empréstimo no histórico
        this.registros.push(`Emprestou livro #${id}`);
    }
}
