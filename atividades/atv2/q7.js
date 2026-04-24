let n7 = 5;

try {
  if (!Number.isInteger(n7)) {
    throw "Erro: o número deve ser inteiro!";
  }
  
  for (let i = 1; i <= 10; i++) {
    console.log(n7 + " x " + i + " = " + (n7 * i));
  }
} catch (erro) {
  console.log(erro);
}