// Declara um array com vários números
let numeros = [2, 4, 5, 8, 9, 10, 15, 20];

// Inicializa contadores para pares e ímpares
let pares = 0;
let impares = 0;

// Percorre cada número do array
for (let numero of numeros) {
  // Se o resto da divisão por 2 for zero, é par
  if (numero % 2 === 0) {
    pares++;
  } else {
    // Caso contrário, é ímpar
    impares++;
  }
}

// Imprime a quantidade de números pares
console.log("Pares: " + pares);
// Imprime a quantidade de números ímpares
console.log("Ímpares: " + impares);