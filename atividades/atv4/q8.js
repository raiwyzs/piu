// Q8 – versão arrow da Q7
// Arrow function que filtra números divisíveis pelo divisor
const filtrarArrow = (divisor, numeros) => {
    return numeros.filter(numero => numero % divisor === 0);
}

// Chamando com divisor 3, resultado esperado: [3,6]
console.log(filtrarArrow(3, [1, 2, 2, 3, 5, 6])); // [3,6]