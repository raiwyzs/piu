// Q1 – usar forEach com função anônima (considera 0 como par)
// Define uma função que verifica se cada número da lista é par ou ímpar
function parOuImpar(numeros) {
    // Percorre cada elemento do array usando forEach
    numeros.forEach(function(numero) {
        // Se o resto da divisão por 2 for zero, é par
        if (numero % 2 === 0) {
            console.log(numero + " é par");
        } else {
            // Caso contrário, é ímpar
            console.log(numero + " é ímpar");
        }
    });
}

// Chama a função com um exemplo de array
parOuImpar([1, 2, 5, 6, 0]);