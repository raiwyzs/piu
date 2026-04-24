// Q5 – versão arrow da Q4
const multiplicarArrow = (fator, numeros) => {
    return numeros.map(numero => numero * fator);
}

console.log(multiplicarArrow(3, [1, 2, 2, 3, 5, 6])); 