// Define uma 'matriz' (array de pares chave/valor) representando uma pessoa
let pessoaMatriz = [
  ["nome", "Teste"],
  ["idade", 10],
  ["ja_foi_a_Disney", false]
];

// Percorre os índices do array pessoaMatriz
for (let indice in pessoaMatriz) {
  // Recupera o par [chave, valor] no índice atual
  let par = pessoaMatriz[indice];
  // Imprime chave e valor concatenados (ex: 'nome Teste')
  console.log(par[0] + " " + par[1]);
}