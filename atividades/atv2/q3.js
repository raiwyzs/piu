let numeros = [2, 4, 5, 8, 9, 10, 15, 20];
let pares = 0;
let impares = 0;

for (let numero of numeros) {
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log("Pares: " + pares);
console.log("Ímpares: " + impares);