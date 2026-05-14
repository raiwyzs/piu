// Q2 – usar forEach com arrow function
// Versão que usa arrow function para tornar a sintaxe mais concisa
function parOuImparArrow(numeros) {
    // forEach percorre cada número e executa a arrow function
    numeros.forEach(numero => {
        // Verifica paridade e imprime mensagem formatada
        if (numero % 2 === 0) {
            console.log(`${numero} é par`);
        } else {
            console.log(`${numero} é ímpar`);
        }
    });
}

// Exemplo de uso
parOuImparArrow([1, 2, 5, 6, 0]);