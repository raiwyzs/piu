// Q3 – dobrar usando map com função anônima
// Define uma função que retorna um novo array com cada elemento dobrado
function dobrar(numeros) {
    // map cria um novo array aplicando a função a cada elemento
    return numeros.map(function(numero) {
        return numero * 2;
    });
}

// Imprime o resultado da função para o array de exemplo
console.log(dobrar([1, 2, 2, 3, 5, 6])); 