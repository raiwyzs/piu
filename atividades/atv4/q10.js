// Q10 – versão arrow da Q9
// Implementação concisa com arrow function e reduce
const somarArrow = (numeros) => numeros.reduce((acc, n) => acc + n, 0);

// Exemplo de uso
console.log(somarArrow([1, 2, 2, 3, 5, 6])); 