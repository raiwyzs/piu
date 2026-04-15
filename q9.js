function validarNome(nome) {
  if (typeof nome !== "string" || nome.trim() === "") {
    throw "Erro: nome deve ser uma string não vazia!";
  }
  return nome;
}

function validarIdade(idade) {
  if (!Number.isInteger(idade) || idade < 0 || idade > 150) {
    throw "Erro: idade deve ser um inteiro entre 0 e 150!";
  }
  return idade;
}

function validarFoiADisney(foiADisney) {
  if (typeof foiADisney !== "boolean") {
    throw "Erro: já foi à Disney deve ser booleano (true/false)!";
  }
  return foiADisney;
}

try {
  let pessoa9 = {
    nome: validarNome("Maria"),
    idade: validarIdade(25),
    ja_foi_a_Disney: validarFoiADisney(true)
  };
  
  console.log(pessoa9.nome);
  console.log(pessoa9.idade);
  console.log(pessoa9.ja_foi_a_Disney);
} catch (erro) {
  console.log(erro);
}

console.log("\n===== Q10 =====");
console.log("Verifique o arquivo q10.html para usar a questão 10!");