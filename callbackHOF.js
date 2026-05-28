// HOF -> Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
   return num1 / num2
}

const resultadoDaSoma = calcular(3,2, soma) // soma é um callback
console.log("Resultado da soma:", resultadoDaSoma)


const resultadoDaDivisao = calcular(32,8, divisao) // divisão é uma callback
console.log("Resultado da divisão:", resultadoDaDivisao)