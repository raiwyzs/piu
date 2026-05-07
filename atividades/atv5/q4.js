
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    
    area() {
        return this.altura * this.largura
    }
}

const ret = new Retangulo(5, 10)

console.log("A área do retângulo é: " + ret.area())
