# Explicações dos Conceitos em JavaScript

Este arquivo descreve o que cada termo faz e onde ele pode ser usado, com exemplos baseados nos arquivos de `prova`.

## function
Uma `function` define um bloco de código que pode ser executado quando chamado pelo nome.
- Usada para organizar lógica reutilizável.
- Recebe parâmetros de entrada e pode retornar um valor.

Exemplo:
```js
function resumoNotas(lista) {
  // corpo da função
}
```

## class
Uma `class` é um molde para criar objetos com propriedades e métodos.
- Usada para modelos como `ContaBancaria`, `Biblioteca` e `Estoque`.
- Permite agrupar estado (`this.saldo`) e comportamentos (`depositar`, `sacar`).

Exemplo:
```js
class ContaBancaria {
  constructor() {
    this.saldo = 0;
  }
}
```

## constructor
`constructor` é um método especial dentro de uma classe.
- Executado automaticamente quando um novo objeto é criado com `new`.
- Inicializa propriedades do objeto.

Exemplo:
```js
constructor() {
  this.saldo = 0;
  this.historico = [];
}
```

## acc
`acc` é uma abreviação comum para "acumulador".
- Usado dentro de `reduce` para guardar o valor acumulado enquanto a função percorre um array.
- Pode ser um número, objeto ou outro tipo de valor que se atualiza em cada iteração.

Exemplo:
```js
const resultado = lista.reduce((acc, aluno) => {
  acc.soma += aluno.nota;
  return acc;
}, { soma: 0 });
```

## reduce
`reduce` é um método de arrays que transforma uma lista em um único valor.
- Recebe uma função e um valor inicial.
- A função do `reduce` é chamada para cada elemento do array.
- Útil para somar valores, encontrar máximo/minimo, agrupar dados.

Exemplo:
```js
lista.reduce((acc, aluno) => {
  acc.soma += aluno.nota;
  return acc;
}, { soma: 0 });
```

## length
`length` é uma propriedade de arrays e strings que informa o tamanho.
- Em arrays, mostra quantos elementos existem.
- Em strings, mostra quantos caracteres existem.

Exemplo:
```js
resultado.media = resultado.soma / lista.length;
```

## const
`const` declara uma variável cujo valor não deve ser reatribuído.
- Use para valores que não mudarão de referência.
- O conteúdo de um objeto ou array pode mudar mesmo se declarado com `const`.

Exemplo:
```js
const alunos = [ ... ];
```

## let
`let` declara uma variável que pode ser reatribuída.
- Use quando o valor precisa mudar durante a execução.

Exemplo:
```js
let texto = "vou mudar para 30";
texto = 30;
```

## this
`this` refere-se ao objeto atual dentro de uma classe ou método.
- Usado em classes para acessar propriedades do objeto.

Exemplo:
```js
this.saldo = 0;
this.historico.push(...);
```

## push
`push` é um método de arrays que adiciona um elemento ao final.
- Muito usado para registrar eventos ou construir listas.

Exemplo:
```js
this.historico.push(`Depositou R$${valor}`);
```

## if
`if` é uma estrutura condicional usada para tomar decisões.
- Executa um bloco de código somente se a condição for verdadeira.

Exemplo:
```js
if (posição > 0) {
  // faz algo
}
```

## throw new Error
`throw new Error(...)` interrompe a execução e lança um erro.
- Usado para avisar quando algo inesperado ou inválido acontece.
- Pode ser tratado com `try/catch`.

Exemplo:
```js
if (valor > this.saldo) {
  throw new Error("Saldo insuficiente");
}
```

## try / catch
`try / catch` captura erros lançados dentro do bloco `try`.
- Permite tratar erros sem quebrar o programa.

Exemplo:
```js
try {
  conta.sacar(400);
} catch (erro) {
  console.log(erro.message);
}
```

## Math.max / Math.min
`Math.max` e `Math.min` retornam o maior ou menor valor entre argumentos.
- Úteis para encontrar máximo e mínimo em comparações.

Exemplo:
```js
acc.maior = Math.max(acc.maior, aluno.nota);
acc.menor = Math.min(acc.menor, aluno.nota);
```

## Array.find
`find` procura o primeiro elemento de um array que satisfaça uma condição.
- Retorna o elemento encontrado ou `undefined` se não houver.

Exemplo:
```js
const existente = this.produtos.find(p => p.id === produto.id);
```

## -= e +=
Operadores de atribuição combinada somam ou subtraem e reatribuem o valor.
- `+=` adiciona um valor ao valor atual.
- `-=` subtrai um valor do valor atual.

Exemplos:
```js
this.saldo += valor;
produto.quantidade -= quantidade;
```

## Onde cada coisa se encaixa
- `function`: ideal para lógica independente que pode ser reutilizada em diferentes partes do programa.
- `class`: ideal para representar entidades com estado e comportamento, como contas bancárias e estoques.
- `reduce`: ideal para calcular valores agregados a partir de uma lista, como média, maior/menor valor ou contagem.
- `length`: ideal para saber o tamanho de arrays ou strings, por exemplo para calcular média ou validar entrada.
- `if`: ideal para decisões, como verificar saldo ou disponibilidade de estoque.
- `throw`: ideal para sinalizar erros que devem ser tratados em outro lugar do código.
- `try/catch`: ideal para proteger operações que podem falhar e manter o programa estável.

## Conclusão
Estes conceitos são peças básicas de JavaScript e funcionam bem juntos para criar programas organizados, legíveis e com comportamento previsível.
