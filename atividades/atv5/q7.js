

class Animal {
    constructor(nome) {
        this.nome = nome
    }
    
    falar() {
        return this.nome + " emitiu um som."
    }
}


class Cachorro extends Animal {
    constructor(nome) {
        super(nome)
    }
    
    falar() {
        return this.nome + " latiu: Au au!"
    }
}

// Classe BemTeVi que herda de Animal
class BemTeVi extends Animal {
    constructor(nome) {
        super(nome)
    }
    
    falar() {
        return this.nome + " cantou: Bem-te-vi!"
    }
}

const dog = new Cachorro("Rex")
const passaro = new BemTeVi("Zé")


console.log(dog.falar())
console.log(passaro.falar())
