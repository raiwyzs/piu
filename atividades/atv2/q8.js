function contarParesImpares(lista) {
  let resultado = {
    pares: 0,
    impares: 0
  };
  
  for (let numero of lista) {
    if (!Number.isInteger(numero)) {
      throw "Erro: todos os elementos devem ser inteiros!";
    }
    
    if (numero % 2 === 0) {
      resultado.pares++;
    } else {
      resultado.impares++;
    }
  }
  
  return resultado;
}

try {
  let numeros8 = [1, 2, 3, 4, 5, 6];
  let resultado8 = contarParesImpares(numeros8);
  console.log(resultado8);
} catch (erro) {
  console.log(erro);
}