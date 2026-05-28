//exercicios do claude
//1-

//for(let i = 1; i<= 10; i++) {
//     console.log(i)
//}

//let repetir = 1
//while(repetir<=10) {
//    console.log(repetir)
//    repetir++
//}

//2-

//for(let i = 10; i >=1; i--) {
//    console.log(i)
//}

//3

//let soma = 0
//let i = 1

//while(soma<=100) {
//    soma = soma + i;
//    i++
//}
//console.log("A soma de 1 a 100 é: " + soma)

//4-
//let tentativa = 1
//do {
//    console.log("Tentativa  "  + tentativa +  "  de 3")
//    if(tentativa === 3) {
//        console.log("Acesso bloqueado")
//    }
//    tentativa++
//}while(tentativa<=3)

//5-

//for(let i = 1; i<=10;i++) {
//    let resultado = 7*i;
//    console.log("7 x " + i + "= " + resultado)
//}

//6-

//for(let i = 1; i<=20;i++) {
//    if(i % 2=== 0 ) {
//        console.log(i + "-par")
//    }else {
//        console.log(i + "-ímpar")
//    }
//}

//7-
//let alvo = 37;
//let chute = 1;
//
//while (chute < alvo) {
//  console.log("Chutando: " + chute);
//  chute = chute + 7;
//}
//
//console.log("Chegou em: " + chute);

//8-

//let saldoInicial = 1000
//let saques = 250
//
//do {
//    saldoInicial = saldoInicial-saques
//    console.log("Saque de r$" + saques + " realizado. Saldo atual: r$" + saldoInicial)
//}while(saldoInicial>=saques)

//palavras.lenght

const nome = "felipe"
for(let contador = 1; contador < nome.length; contador++) {
    console.log(nome[contador])
}
