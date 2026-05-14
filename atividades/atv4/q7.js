// Q7 – filtrar por divisor usando filter com função anônima
// Retorna números do array que são divisíveis pelo 'divisor' informado
function filtrar(divisor, numeros) {
    return numeros.filter(function(numero) {
        return numero % divisor === 0;
    });
}

// Exemplo: filtrar números divisíveis por 3
console.log(filtrar(3, [1, 2, 2, 3, 5, 6])); 