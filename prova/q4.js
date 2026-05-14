Questão 4 — Produtos Duplicados
Crie um sistema de produtos que:
• não permita IDs repetidos
• some quantidade automaticamente
• remova produtos
• registre operações
Resposta Comentada:
class Estoque {
 constructor() {
 this.produtos = []
 this.registros = []
 }
 adicionar(produto) {
 // Procura produto com mesmo ID
 const existente = this.produtos.find(
 p => p.id === produto.id
 )
 if (existente) {
 // Soma quantidade
 existente.quantidade += produto.quantidade
 } else {
 // Adiciona novo produto
 this.produtos.push(produto)
 }
 this.registros.push(
 `Adicionou produto #${produto.id}`
 )
 }
 remover(id, quantidade) {
 const produto = this.produtos.find(
 p => p.id === id
 )
 if (!produto) {
 throw new Error("Produto inexistente")
 }
 if (produto.quantidade < quantidade) {
 throw new Error("Quantidade insuficiente")
 }
 produto.quantidade -= quantidade
 this.registros.push(
 `Removeu ${quantidade} unidades`
 )
 }
}
