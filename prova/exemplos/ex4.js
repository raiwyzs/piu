/* Calcule a média de idade em uma lista de pessoas.
Não use laços de repetição.
*/
const pessoas = [
    { nome: 'Ana Clara', idade: 18 },
    { nome: 'Maria das Graças', idade: 20 },
    { nome: 'Davi', idade: 18 },
    { nome: 'Miguel', idade: 17 },
    { nome: 'Ezaelly', idade: 19 },
    { nome: 'Ciro quando passou na faculdade', idade: 16 }
]

let media = pessoas.reduce(
    (acc, p) => {
        return acc += p.idade / pessoas.length
    },
    0
)
console.log(media)