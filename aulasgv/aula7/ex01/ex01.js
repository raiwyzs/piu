//n1 = Number(window.prompt("Digite um numero:"))
//n2 = Number(window.prompt("Digite outro numero:"))
//soma = window.alert(`A soma de ${n1} + ${n2} = ${n1+n2}`)
//subtracao = window.alert(`A subtração de ${n1} - ${n2} = ${n1-n2}`)
//multiplicacao = window.alert(`A multiplicação de ${n1} * ${n2} = ${n1*n2}`)
//divisao = window.alert(`A divisao de ${n1} / ${n2} = ${n1/n2}`)
//divisao_int = window.alert(`O resto da divisão de ${n1} % ${n2} = ${n1%n2}`)
//potencia = window.alert(`A potência de ${n1} ** ${n2} = ${n1 ** n2}`)

let n1 = Number(window.prompt("Digite um numero:"))
let n2 = Number(window.prompt("Digite outro numero:"))

let soma = n1 + n2
window.alert(`A soma de ${n1} + ${n2} = ${soma}`)

let divisao_int = soma % n1
window.alert(`O resto da divisão de ${soma} % ${n1} = ${divisao_int}`)

let multiplicacao_potencia = n1 * divisao_int ** 2
window.alert(`A multiplicação e potência de ${n1} * ${divisao_int} ** 2 = ${multiplicacao_potencia}`)

let subtracao_divisao = 10 - soma / 2
window.alert(`A subtração e a divisão de 10 - ${soma} / 2 = ${subtracao_divisao}`)

let multiplicacao_divisao = 6 * 2 / subtracao_divisao
window.alert(`A multiplicação e a divisão de 6 * 2 / ${subtracao_divisao} = ${multiplicacao_divisao}`)

let divisao_divisaoint = divisao_int % multiplicacao_divisao + 4 / multiplicacao_divisao
window.alert(`Resultado final = ${divisao_divisaoint}`)