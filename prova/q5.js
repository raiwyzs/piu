/* Questão 5 — Estatísticas de Funcionários
Crie uma função que retorne:
• média salarial
• funcionário mais velho
• funcionário mais novo
• quantidade de homens e mulheres */

function resumoFuncionarios(lista) {
    // Acumula dados dos funcionários usando reduce
    const resultado = lista.reduce((acc, funcionario) => {
        // Soma o salário do funcionário para cálculo da média
        acc.soma += funcionario.salario;
        // Atualiza a idade do funcionário mais velho
        acc.maisVelho = Math.max(
            acc.maisVelho,
            funcionario.idade
        );
        // Atualiza a idade do funcionário mais novo
        acc.maisNovo = Math.min(
            acc.maisNovo,
            funcionario.idade
        );
        // Conta o gênero do funcionário
        if (funcionario.genero === "F") {
            acc.mulheres++;
        } else {
            acc.homens++;
        }
        return acc;
    }, {
        soma: 0,
        maisVelho: -Infinity,
        maisNovo: Infinity,
        homens: 0,
        mulheres: 0
    });

    // Calcula a média salarial a partir da soma total e do número de funcionários
    resultado.media = resultado.soma / lista.length;
    // Remove a propriedade auxiliar soma do resultado final
    delete resultado.soma;

    return resultado;
}
