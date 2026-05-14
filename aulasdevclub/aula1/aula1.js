const abacate = "oi"
const variavel = 2
console.log(variavel + abacate)

// a diferença do const pro let é que eu sempre posso mudar o let, por exemplo:
let texto = "vou mudar para 30"


texto = 30

console.log(texto)

// agora, quando eu der print, ao inves de aparecer mudar para 30, vai aparecer 30

const usuario = {
    nome: "Raissa",
    idade: 18,
    casada: false
} //objetos

console.log(usuario)
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.casada)


const meuArray = [{
    nome: "Raissa",
    idade: 18,
    casada: false
},
{
    nome: "Maria",
    idade: 20,
    casada: true
}
]
console.log(meuArray)
console.log(meuArray[0])
