// exercicios

//1- 

//const nome = "Felipe Fernando Baie Dos Santos"
//const idade = 19
//
//console.log('meu nome é ' + nome,'e tenho ' + idade +' anos')

//2- 

//let numero1 = 10
//let numero2 = 5
//
//console.log(numero1 + numero2, numero1 - numero2, numero1*numero2, numero1 / numero2)

//-3 

//let pontos = 1 
//pontos++
//pontos--
//console.log(pontos)

//-5

//let saldo = 100
//saldo -= 30
//saldo *= 2
//saldo /= 4
//
//console.log(saldo)

//-6 
//
//console.log(5 == "5");
//console.log(5 === "5");

// a primeira comparação é nao estrita ja a segunda é uma comparação estrita, a primeira mesmo sendo string o javaScript tenta comparar e não quebrar, ja na estrita ele ja quebra se for um number ou uma string.

//-7

//let idade = 18;
//
//console.log('a idade é maior que 18 ? ', idade>18, 'idade é igual a 18 ? ', idade==18, 'idade é diferente de 20 ?', idade!=20)

//8-

//let idade = 20;
//let temCarteira = true;
//
//let podeDirigir = idade>=18 && temCarteira
//
//console.log('ele pode dirigir ? ', podeDirigir)

//9-

//let temDinheiro = false;
//let temCartao = true;
//
//let podeComprar = temDinheiro || temCartao
//
//console.log("pode comprar ? ", podeComprar)

//10-

//let estaChovendo = false;
//
//if (!estaChovendo) {
//    console.log('vou sair');
//}

//let estaCalor =  true
//
//if (!estaCalor) 
//    console.log("vou ficar em casa")
//
//else (estaCalor) 
    //console.log("vou sair então")

let idade = 17;
let temCarteira = false;

if (idade && temCarteira)
    console.log('pode dirigir')
else 
    console.log('nao pode dirirgir')
