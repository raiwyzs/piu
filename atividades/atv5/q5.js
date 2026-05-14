// Classe Funcionario com campos privados e método para cálculo de salário
class Funcionario {
    #nome
    #salarioBase
    
    constructor(nome, salarioBase) {
        // Campos privados inicializados no construtor
        this.#nome = nome
        this.#salarioBase = salarioBase
    }
    
    // Método privado que calcula o bônus (10% do salário base)
    #calcularBonus() {
        return this.#salarioBase * 0.10
    }
    
    // Método público que retorna o salário total (base + bônus)
    salarioTotal() {
        return this.#salarioBase + this.#calcularBonus()
    }
}


const func = new Funcionario("João", 1000)


console.log("Salário total: " + func.salarioTotal())

