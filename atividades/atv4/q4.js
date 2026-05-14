// Q4 – multiplicar por um fator usando map com função anônima
// Retorna um novo array onde cada número é multiplicado pelo fator informado
function multiplicar(fator, numeros) {
    return numeros.map(function(numero) {
        return numero * fator;
    });
}

// Demonstração da função multiplicar com fator 3
console.log(multiplicar(3, [1, 2, 2, 3, 5, 6])); 