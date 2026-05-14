// Função construtora Pessoa (padrão ES5)
function Pessoa(nome, idade) {
    // Define propriedades nome e idade no objeto criado
    this.nome = nome
    this.idade = idade
    
    // Método apresentar que retorna uma string de apresentação
    this.apresentar = function() {
        return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos"
    }
}

// Cria instâncias usando new
const pessoa1 = new Pessoa("Raissa", 28)
const pessoa2 = new Pessoa("Maria", 35)

// Imprime as apresentações no console
console.log(pessoa1.apresentar())
console.log(pessoa2.apresentar())
