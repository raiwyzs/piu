/* Encontre a mais velha em uma lista de pessoas.
Não use laços de repetição.
*/
const pessoas = [
    { nome: 'Ana Clara', idade: 18 },
    { nome: 'Maria das Graças', idade: 20 },
    { nome: 'Davi', idade: 18 },
    { nome: 'Miguel', idade: 17 },
    { nome: 'Ezaelly', idade: 19 }
]
let mais_velha = pessoas.reduce(
    function (v, p) {
        if (p.idade > v.idade)
            v = p // ou return p
        return v
    },
    { nome: 'Ninguém', idade: -1 }
)
console.log(mais_velha)