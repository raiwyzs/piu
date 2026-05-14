// Q9 – somar usando reduce com função anônima
// Soma todos os números do array usando reduce
function somar(numeros) {
    return numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
}

// Resultado esperado: 19
console.log(somar([1, 2, 2, 3, 5, 6])); // 19