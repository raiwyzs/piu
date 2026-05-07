class Funcionario {
    #nome
    #salarioBase
    
    constructor(nome, salarioBase) {
        this.#nome = nome
        this.#salarioBase = salarioBase
    }
    
    #calcularBonus() {
        return this.#salarioBase * 0.10
    }
    
    salarioTotal() {
        return this.#salarioBase + this.#calcularBonus()
    }
}


const func = new Funcionario("João", 1000)


console.log("Salário total: " + func.salarioTotal())

