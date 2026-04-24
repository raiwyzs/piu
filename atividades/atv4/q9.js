// Q9 – somar usando reduce com função anônima
function somar(numeros) {
    return numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
}

console.log(somar([1, 2, 2, 3, 5, 6])); // 19