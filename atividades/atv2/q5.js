let pessoaMatriz = [
  ["nome", "Teste"],
  ["idade", 10],
  ["ja_foi_a_Disney", false]
];

for (let indice in pessoaMatriz) {
  let par = pessoaMatriz[indice];
  console.log(par[0] + " " + par[1]);
}