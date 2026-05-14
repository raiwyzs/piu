// Objeto protótipo com método descrever
const animalProto = {
    descrever: function() {
        return "Este(a) é um(a) " + this.grupo
    }
}


// Cria objetos que delegam para animalProto
const peba = Object.create(animalProto)
peba.grupo = "mamífero"

const arribaca = Object.create(animalProto)
arribaca.grupo = "ave"

// Imprime descrições usando o método herdado via protótipo
console.log(peba.descrever())
console.log(arribaca.descrever())
