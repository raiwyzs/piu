/* Questão 1 — Média de Notas
Crie uma função que receba uma lista de alunos e retorne:
• maior nota
• menor nota
• média da turma
• quantidade de aprovados */

// Lista de alunos com nome e nota
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Maria", nota: 9 },
    { nome: "Pedro", nota: 6 }
];

function resumoNotas(lista) {
    // Usa reduce para acumular os dados de notas dos alunos
    const resultado = lista.reduce((acc, aluno) => {
        // Atualiza a maior nota encontrada
        acc.maior = Math.max(acc.maior, aluno.nota);
        // Atualiza a menor nota encontrada
        acc.menor = Math.min(acc.menor, aluno.nota);
        // Soma a nota do aluno para cálculo da média
        acc.soma += aluno.nota;
        // Conta se o aluno foi aprovado (nota >= 7)
        if (aluno.nota >= 7) {
            acc.aprovados++;
        }
        return acc;
    }, {
        maior: -Infinity,
        menor: Infinity,
        soma: 0,
        aprovados: 0
    });

    // Calcula a média da turma
    resultado.media = resultado.soma / lista.length;
    // Remove a soma porque não faz parte do resultado final esperado
    delete resultado.soma;

    return resultado;
}

// Exibe o resumo de notas no console
console.log(resumoNotas(alunos));
