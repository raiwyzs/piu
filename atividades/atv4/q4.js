// Q4 – multiplicar por um fator usando map com função anônima
function multiplicar(fator, numeros) {
    return numeros.map(function(numero) {
        return numero * fator;
    });
}

console.log(multiplicar(3, [1, 2, 2, 3, 5, 6])); 