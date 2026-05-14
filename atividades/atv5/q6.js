// Classe ContaBancaria com campo privado #saldo e getter/setter customizados
class ContaBancaria {
    #saldo = 0
    
    // Getter que formata o saldo em reais (R$) com vírgula como separador decimal
    get saldo() {
        return "R$ " + this.#saldo.toFixed(2).replace(".", ",")
    }
    
    // Setter que valida se o novo saldo não é negativo
    set saldo(valor) {
        if (valor < 0) {
            console.log("Erro! O saldo não pode ser negativo!")
            return
        }
        this.#saldo = valor
    }
}


const conta = new ContaBancaria()

conta.saldo = 100
console.log("Saldo atual: " + conta.saldo)

console.log("\nTentando colocar saldo negativo...")
conta.saldo = -50
console.log("Saldo após tentativa: " + conta.saldo)
