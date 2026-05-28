//1-

//function saudacao(nome) {
//    console.log('Olá! seja bem-vindo(a)!', nome)
//}
//
//saudacao('Felipe')

//-2

//function apresentarPessoa(nome,idade) {
//    console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos.')
//}
//
//apresentarPessoa('Felipe', '19')

//3-

//function calcularIMC(peso,altura) {
//    return imc = peso/(altura*altura)
//}
//
//calcularIMC('95','1.95')
//
//console.log('O resultado do IMC é: ', imc)

//function calcularIMC(peso, altura) {
//  let imc = peso / (altura * altura);
//  return imc;
//}
//
//let resultadoIMC = calcularIMC(95, 1.95);
//console.log("Seu IMC é: " + resultadoIMC);

//4-

//function verificarAprovacao(nota) {
//    if(nota>=7) {
//         console.log('Aprovado')
//    }else {
//      console.log('Reprovado')
//    }
//}
//
//verificarAprovacao('8');

//5-

//function ehpar(numero) {
//    if(numero % 2 == 0) {
//        console.log(true)
//    }else {
//        console.log(false)
//    }
//}
//
//ehpar('5')
//
//function ehpar(numero) {
//    return numero % 2 ==0
//}
//
//console.log('o número é par? ' + ehpar(5));

//6-

//function soma(n1,n2) {
//    return n1+n2
//}
//
//let somando = soma('10','2')
//
//console.log('O resultado dessa soma é: ' + somando)
/////////////////////////////////////////
//function soma(a,b) {
//    return a+b
//}
//console.log('soma: ' + soma(5,10))

//-7

//function calcularTroco(valorCompra, valorPago) {
//  let troco = valorPago - valorCompra;
//  return troco;
//}
//
//let resultadoTroco = calcularTroco(40, 50);
//console.log("Troco: R$ " + resultadoTroco);


//8-

//const somando = (n1,n2) => {
//   return n1+n2
//}
//
//console.log('soma:' + somando(2,2))

//9-

//function executarAcao(acao) {
//    acao();
//}
//
//executarAcao(function() {
//    console.log('Executando ação')
//})

//10-meu programa

//function fazerPergunta(pergunta,respostacorreta) {
//    let respostaDoUsuario = respostacorreta
//    if(respostaDoUsuario === respostacorreta) {
//        console.log('Sua resposta está correta')
//    }else {
//        console.log('Sua resposta está errada')
//    }
//}
//fazerPergunta('eu torço pro corinthians?','sim')


//10-gabarito
//function fazerPergunta(pergunta, respostaCorreta) { 
//
//let respostaUsuario = respostaCorreta; // simulação da resposta 
//
//if (respostaUsuario === respostaCorreta) { 
//
//console.log("Resposta correta!"); 
//
//} else { 
//
//console.log("Resposta errada!"); 
//
//} 
//
//} 
//
//fazerPergunta("Qual é a capital do Brasil?", "Brasília");

