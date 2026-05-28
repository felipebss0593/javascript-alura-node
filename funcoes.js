function saudacao(nome) {
    console.log("Olá,", nome)
}

//const saudacao = (nome) => {
//    console.log("Vida longa e próspera,", nome)
//}

saudacao('Felipe') // Felipe é o "argumento"
saudacao(1)

function calcularDobroDeUm(numero) {
     return numero * 2
}

//const calcularDobroDeUm = (numero) => {
//    return numero * 2
//}

const numeroDobrado = calcularDobroDeUm(20)
console.log("O dobro de 20 é: " + numeroDobrado)