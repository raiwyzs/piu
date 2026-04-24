// Q7 – filtrar por divisor usando filter com função anônima
function filtrar(divisor, numeros) {
    return numeros.filter(function(numero) {
        return numero % divisor === 0;
    });
}

console.log(filtrar(3, [1, 2, 2, 3, 5, 6])); 