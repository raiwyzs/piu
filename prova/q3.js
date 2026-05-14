Questão 3 — Controle de Biblioteca
Crie um sistema que:
• adiciona livros
• empresta livros
• impede empréstimo sem estoque
• registra operações
Resposta Comentada:
class Biblioteca {
 constructor() {
 this.livros = []
 this.registros = []
 }
 adicionar(livro) {
 // Procura livro existente
 const existente = this.livros.find(
 l => l.id === livro.id
 )
 // Se existir, soma quantidade
 if (existente) {
 existente.quantidade += livro.quantidade
 } else {
 // Caso contrário adiciona novo
 this.livros.push(livro)
 }
 this.registros.push(
 `Adicionou ${livro.quantidade} livros`
 )
 }
 emprestar(id) {
 const livro = this.livros.find(
 l => l.id === id
 )
 // Verifica existência
 if (!livro) {
 throw new Error("Livro não encontrado")
 }
 // Verifica estoque
 if (livro.quantidade <= 0) {
 throw new Error("Sem estoque")
 }
 livro.quantidade--
 this.registros.push(
 `Emprestou livro #${id}`
 )
 }
}