// Q8 – versão arrow da Q7
const filtrarArrow = (divisor, numeros) => {
    return numeros.filter(numero => numero % divisor === 0);
}

console.log(filtrarArrow(3, [1, 2, 2, 3, 5, 6])); // [3,6]