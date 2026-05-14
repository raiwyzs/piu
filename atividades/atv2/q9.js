// Função para validar que o nome é uma string não vazia
function validarNome(nome) {
  if (typeof nome !== "string" || nome.trim() === "") {
    throw "Erro: nome deve ser uma string não vazia!";
  }
  return nome;
}

// Função para validar idade: deve ser inteiro entre 0 e 150
function validarIdade(idade) {
  if (!Number.isInteger(idade) || idade < 0 || idade > 150) {
    throw "Erro: idade deve ser um inteiro entre 0 e 150!";
  }
  return idade;
}

// Função para validar se a pessoa já foi à Disney (booleano)
function validarFoiADisney(foiADisney) {
  if (typeof foiADisney !== "boolean") {
    throw "Erro: já foi à Disney deve ser booleano (true/false)!";
  }
  return foiADisney;
}

// Bloco try/catch para criar e validar um objeto pessoa
try {
  let pessoa9 = {
    nome: validarNome("Maria"),
    idade: validarIdade(25),
    ja_foi_a_Disney: validarFoiADisney(true)
  };
  
  // Imprime as propriedades validadas da pessoa
  console.log(pessoa9.nome);
  console.log(pessoa9.idade);
  console.log(pessoa9.ja_foi_a_Disney);
} catch (erro) {
  // Em caso de erro nas validações, imprime a mensagem
  console.log(erro);
}

// Mensagem informativa sobre a questão 10 (arquivo HTML)
console.log("\n===== Q10 =====");
console.log("Verifique o arquivo q10.html para usar a questão 10!");