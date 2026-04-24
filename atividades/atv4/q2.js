// Q2 – usar forEach com arrow function
function parOuImparArrow(numeros) {
    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            console.log(`${numero} é par`);
        } else {
            console.log(`${numero} é ímpar`);
        }
    });
}

parOuImparArrow([1, 2, 5, 6, 0]);