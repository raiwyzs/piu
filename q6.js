let n6 = 5;

if (typeof n6 === "number") {
  if (n6 > 0) {
    console.log("positivo");
  } else if (n6 < 0) {
    console.log("negativo");
  } else {
    console.log("zero");
  }
} else {
  console.log("Tipo inválido: " + typeof n6);
}
