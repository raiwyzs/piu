// Declara variável n6 com valor 5
let n6 = 5;

// Verifica se o tipo de n6 é 'number' antes de comparar valores
if (typeof n6 === "number") {
  // Se n6 for maior que zero, é positivo
  if (n6 > 0) {
    console.log("positivo");
  // Se n6 for menor que zero, é negativo
  } else if (n6 < 0) {
    console.log("negativo");
  } else {
    // Caso contrário (n6 === 0), imprime zero
    console.log("zero");
  }
} else {
  // Se não for number, imprime o tipo inválido
  console.log("Tipo inválido: " + typeof n6);
}
