//praticando o que aprendeu

//1-

//function saudacao(nome) {
//    console.log('olá ' + nome + ', seja bem-vindo')
//}
//
//saudacao('Felipe')

//2-


//function dobrar(numero) {
//     return numero*2
//}
//
//console.log(dobrar('8'))

//3-

//function expressao(x) {
//    return 3*x +2
//}
//
//console.log(expressao('5'))

//4-
//function iniciarSistema(play) {
//    console.log('Sistema iniciado com sucesso')
//}
//
//iniciarSistema()

//5-

//function media(nota1,nota2) {
//    let somaDasNotas = nota1 + nota2;
//    let resultado = somaDasNotas/2
//    return resultado
//    
//}
//
//console.log(media(8,10))

//6-

//function calcular(lado1) {
//    let area = lado1*lado1
//    return area
//}
//console.log(calcular(5))

//let area = (lado1) => {
//    return lado1*lado1
//}
//console.log(area(5))

//7-

//function quadrado(numeroLado) {
//    return numeroLado*numeroLado
//}
//
//let area = quadrado(5);
//console.log('o valor da área do quadrado é: ', area)
//
//let area2 = (numeroLado) => {
//    return numeroLado*numeroLado
//}
//console.log('o valor da área do quadrado é: ', area2(5))

//8-

function mensagemPrincipal(mensagem,nome1,nome2) {
    return mensagem(nome1,nome2)
}

function mensagemQueVaiAparecer(nome1,nome2) {
    return nome1+nome2
}

const resultadoDaMensagem = mensagemPrincipal('Bem vindo','felipe','larissa')

console.log(resultadoDaMensagem)

