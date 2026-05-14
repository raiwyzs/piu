/* Questão 2 — Sistema Bancário
Crie uma classe ContaBancaria com:
• saldo
• depositar()
• sacar()
• histórico de operações */

class ContaBancaria {
    constructor() {
        // Inicializa o saldo com zero
        this.saldo = 0;
        // Inicializa o histórico de operações como array vazio
        this.historico = [];
    }

    depositar(valor) {
        // Adiciona o valor ao saldo atual
        this.saldo += valor;
        // Registra a operação de depósito no histórico
        this.historico.push(`Depositou R$${valor}`);
    }

    sacar(valor) {
        // Verifica se o valor solicitado pode ser sacado
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        // Subtrai o valor do saldo
        this.saldo -= valor;
        // Registra a operação de saque no histórico
        this.historico.push(`Sacou R$${valor}`);
    }
}

// Cria uma nova conta bancária
const conta = new ContaBancaria();
// Depósito de R$500 na conta
conta.depositar(500);

try {
    // Tenta sacar R$200 da conta
    conta.sacar(200);
    // Tenta sacar R$400 da conta, pode gerar erro se saldo insuficiente
    conta.sacar(400);
} catch (erro) {
    // Exibe mensagem de erro caso não haja saldo suficiente
    console.log(erro.message);
}

// Mostra o estado atual da conta no console
console.log(conta);
