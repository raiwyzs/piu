// Q6 – filtrar pares usando filter com função anônima
// Retorna apenas os números pares do array
function filtrarPares(numeros) {
    return numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
}

// Resultado esperado: [2,2,6]
console.log(filtrarPares([1, 2, 2, 3, 5, 6])); 