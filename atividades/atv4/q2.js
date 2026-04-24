/*Q2 – Modifique o programa da questão anterior usando uma função arrow (que usa a sintaxe () => {} ) no lugar da função anônima. */

const numerosExemplo = [1, 2, 5, 6, 0];

const parOuImpar = (numeros) => {
    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            console.log(`${numero} é par`);
        } else {
            console.log(`${numero} é ímpar`);
        }
    });
}

// chamada de exemplo
parOuImpar(numerosExemplo);

