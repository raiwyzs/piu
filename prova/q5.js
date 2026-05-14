Questão 5 — Estatísticas de Funcionários
Crie uma função que retorne:
• média salarial
• funcionário mais velho
• funcionário mais novo
• quantidade de homens e mulheres
Resposta Comentada:
function resumoFuncionarios(lista) {
 const resultado = lista.reduce((acc, funcionario) => {
 // Soma salários
 acc.soma += funcionario.salario
 // Verifica idade máxima
 acc.maisVelho = Math.max(
 acc.maisVelho,
 funcionario.idade
 )
 // Verifica idade mínima
 acc.maisNovo = Math.min(
 acc.maisNovo,
 funcionario.idade
 )
 // Conta gênero
 if (funcionario.genero === "F") {
 acc.mulheres++
 } else {
 acc.homens++
 }
 return acc
 }, {
 soma: 0,
 maisVelho: -Infinity,
 maisNovo: Infinity,
 homens: 0,
 mulheres: 0
 })
 resultado.media =
 resultado.soma / lista.length
 delete resultado.soma
 return resultado
}