/*Q1 – Escreva um programa que identifique se os números de um array são pares ou ímpares (considere 0 par). Crie uma função parOuImpar
(numeros) que recebe um array de números e exibe, para cada número, se ele é par ou ímpar. Combine o método forEach do array 
com uma função anônima.
Ex.:
parOuImpar([1, 2, 5, 6, 0])
 Exibe:
1 é ímpar
2 é par
5 é ímpar
6 é par
0 é par */

let numerosExemplo = [1, 2, 5, 6, 0];

function parOuImpar(numeros) {
    numeros.forEach(function(numero) {
        if (numero % 2 === 0) {
            console.log(numero + " é par");
        } else if (numero == 0) {
            console.log(numero + " é zero")
        } else{
            console.log(numero + " é impar")
        }
    });
}

parOuImpar(numerosExemplo);
