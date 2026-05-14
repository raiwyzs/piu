// Classe Retangulo com método para calcular área
class Retangulo {
    constructor(altura, largura) {
        // Inicializa altura e largura
        this.altura = altura
        this.largura = largura
    }
    
    // Método que retorna a área do retângulo
    area() {
        return this.altura * this.largura
    }
}

// Instancia um Retangulo com altura 5 e largura 10
const ret = new Retangulo(5, 10)

// Imprime a área calculada
console.log("A área do retângulo é: " + ret.area())
