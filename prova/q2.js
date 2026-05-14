/*Questão 2 — Sistema Bancário
Crie uma classe ContaBancaria com:
• saldo
• depositar()
• sacar()
• histórico de operações
Resposta Comentada:*/
class ContaBancaria {
    constructor() {
        // Saldo inicial
        this.saldo = 0
        // Guarda registros das operações
        this.historico = []
    }
    depositar(valor) {
        // Soma ao saldo
        this.saldo += valor
        // Registra operação
        this.historico.push(
        `Depositou R$${valor}`
        )
    }
    sacar(valor) {
    // Verifica se há saldo suficiente
    if (valor > this.saldo) {
    throw new Error("Saldo insuficiente")
    }
    // Remove saldo
    this.saldo -= valor
    // Registra operação
    this.historico.push(
    `Sacou R$${valor}`
    )
  }
}
const conta = new ContaBancaria()
conta.depositar(500)
try {
 conta.sacar(200)
 conta.sacar(400)
} catch (erro) {
 console.log(erro.message)
}
console.log(conta)
