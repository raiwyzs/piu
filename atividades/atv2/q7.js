// Declara variável n7 com valor 5
let n7 = 5;

// Bloco try/catch para capturar erros (ex: quando n7 não é inteiro)
try {
  // Se n7 não for um inteiro, lança uma exceção com mensagem de erro
  if (!Number.isInteger(n7)) {
    throw "Erro: o número deve ser inteiro!";
  }
  
  // Se for inteiro, percorre de 1 a 10 e imprime a tabuada
  for (let i = 1; i <= 10; i++) {
    console.log(n7 + " x " + i + " = " + (n7 * i));
  }
} catch (erro) {
  // Em caso de erro, imprime a mensagem de erro
  console.log(erro);
}