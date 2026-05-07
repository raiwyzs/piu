nome = window.prompt("Qual é seu nome?")
idade = Number(window.prompt("Qual é sua idade?"))
nota = Number(window.prompt("Qual é a sua nota?"))
tudo = window.alert(`A aluna ${nome}, tem ${idade} anos e tirou nota ${nota}!`)
// isso é mais pratico e rápido do que fazer "A aluna" + idade "tem" + idade "anos e tirou nota" + nota
//.length (quantos caracteres a string tem)
//.toUpperCase() deixar tudo maisculo
//.toLowerCase() deixa tudo minusculo
// esses de cima se usa depois da variavel. ${nome.toLowerCase()}
//.tofixed() escolhe o numero de casas decimais
