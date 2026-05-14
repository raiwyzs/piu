// Q5 – versão arrow da Q4
// Implementação usando arrow function para maior concisão
const multiplicarArrow = (fator, numeros) => {
    // Retorna um novo array multiplicando cada elemento pelo fator
    return numeros.map(numero => numero * fator);
}

// Exemplo de uso
console.log(multiplicarArrow(3, [1, 2, 2, 3, 5, 6])); 