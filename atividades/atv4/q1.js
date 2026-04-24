// Q1 – usar forEach com função anônima (considera 0 como par)
function parOuImpar(numeros) {
    numeros.forEach(function(numero) {
        if (numero % 2 === 0) {
            console.log(numero + " é par");
        } else {
            console.log(numero + " é ímpar");
        }
    });
}

parOuImpar([1, 2, 5, 6, 0]);