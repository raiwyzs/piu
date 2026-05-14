/*Questão 1 — Média de Notas
Crie uma função que receba uma lista de alunos e retorne:
• maior nota
• menor nota
• média da turma
• quantidade de aprovados
Resposta Comentada:*/
const alunos = [
 { nome: "Ana", nota: 8 },
 { nome: "Carlos", nota: 5 },
 { nome: "Maria", nota: 9 },
 { nome: "Pedro", nota: 6 }
]
function resumoNotas(lista) {
    // reduce percorre o array acumulando dados
    const resultado = lista.reduce((acc, aluno) => {
    // Atualiza maior nota
        acc.maior = Math.max(acc.maior, aluno.nota)
        // Atualiza menor nota
        acc.menor = Math.min(acc.menor, aluno.nota)
        // Soma notas para calcular média
        acc.soma += aluno.nota
        // Conta aprovados
        if (aluno.nota >= 7) {
        acc.aprovados++
        }
        return acc
    }, {
      maior: -Infinity,
      menor: Infinity,
      soma: 0,
      aprovados: 0
    })
    // Calcula média
    resultado.media = resultado.soma / lista.length

    delete resultado.soma
    
    return resultado
    }
    console.log(resumoNotas(alunos))
