// Q3 – dobrar usando map com função anônima
function dobrar(numeros) {
    return numeros.map(function(numero) {
        return numero * 2;
    });
}

console.log(dobrar([1, 2, 2, 3, 5, 6])); 