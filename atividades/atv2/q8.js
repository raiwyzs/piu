// Define uma função que conta pares e ímpares em uma lista
function contarParesImpares(lista) {
  // Objeto para armazenar o resultado
  let resultado = {
    pares: 0,
    impares: 0
  };
  
  // Percorre cada número na lista fornecida
  for (let numero of lista) {
    // Valida que cada elemento é um inteiro
    if (!Number.isInteger(numero)) {
      throw "Erro: todos os elementos devem ser inteiros!";
    }
    
    // Incrementa o contador apropriado (par ou ímpar)
    if (numero % 2 === 0) {
      resultado.pares++;
    } else {
      resultado.impares++;
    }
  }
  
  // Retorna o objeto com os contadores
  return resultado;
}

// Bloco try/catch para testar a função e capturar possíveis erros
try {
  let numeros8 = [1, 2, 3, 4, 5, 6];
  let resultado8 = contarParesImpares(numeros8);
  // Imprime o resultado no console (ex: {pares: 3, impares: 3})
  console.log(resultado8);
} catch (erro) {
  // Em caso de erro, imprime a mensagem
  console.log(erro);
}