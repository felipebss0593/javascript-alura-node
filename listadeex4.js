//1-

//for(let contador = 1; contador<=10;contador++) {
//    console.log(contador)
//}

//2-

//let soma = 0; 
//
//for (let i = 1; i <= 100; i++) { 
//
//soma += i; 
//
//} 
//
//console.log("Soma de 1 a 100: " + soma);

//3-

//let numeroInserido = 5
//
//for(let tabuada = 1; tabuada <=10;tabuada++) {
//    console.log(numeroInserido + " x " + tabuada + "=" + (numeroInserido*tabuada))
//}

//4-

//let contador = 10
//
//while(contador>0) {
//    console.log(contador,)
//    contador--
//}
//console.log("Contagem finalizada")

//5-

//let numeroDigitado;
//let quantidade = 0
//let repeticoes = 0
//
//do {
//    if(repeticoes === 0) {
//        numeroDigitado = 6;
//    }else if (repeticoes === 1) {
//        numeroDigitado = 11;
//    }else if (repeticoes === 2) {
//        numeroDigitado = 15
//    }else {
//        numeroDigitado = 0;
//    }
//
//    if(numeroDigitado !== 0) {
//        quantidade++
//    }
//
//    repeticoes++;
//}while (numeroDigitado !== 0)
//
//console.log("Total de números digitados: " + quantidade)    

//6-

//const numeroSecreto = 10
//let tentativa1 = 3
//let tentativa2 = 4
//let tentativa3 = 5
//
//for(let contador = 1; contador<=3;contador++){
//    if(contador === 1) {
//        if(tentativa1 === 10){
//            console.log("Acertou")
//        }else if(tentativa1 !==10) {
//            console.log("A primeira tentaviva esta errada")
//        }
//    }else if(contador === 2) {
//        if(tentativa2 === 10) {
//            console.log("Acertou")
//        }else if(tentativa2 !==10) {
//            console.log("A tentativa 2 esta errada")
//        }
//    }else if(contador === 3) {
//        if(tentativa3 === 10) {
//            console.log("Acertou")
//        }else if (tentativa3 !== 10) {
//            console.log("A tentativa 3 esta errada")
//        }
//    
//    }else {
//        console.log("Tente novamente")
//    }
//}

//6- outra alternativa

//let numeroSecreto = 7;
//
//for (let tentativa = 1; tentativa <= 3; tentativa++) {
//  let numeroTentado;
//
//  if (tentativa === 1) {
//    numeroTentado = 7;
//  } else if (tentativa === 2) {
//    numeroTentado = 5;
//  } else {
//    numeroTentado = 7;
//  }
//
//  if (numeroTentado === numeroSecreto) {
//    console.log("Acertou!");
//  } else {
//    console.log("Tente novamente");
//  }
//}

//7-

//let anoNascimento = 2006
//let anoAtual = 2026
//for(let ano = anoNascimento; ano<= anoAtual; ano++) {
//    console.log("Em" + ano + "Você  tinha" + (ano - anoNascimento) + "anos")
//}


//8- 


//for(let lista = 1; lista <=50;lista++) {
//    if(lista % 2 === 0) {
//        console.log("Os números pares são:", lista)
//    }
//}

//9-

//let multiplo = 0
//
//for(let i = 1; i <=100; i++) {
//    if(i % 3 === 0) {
//        multiplo++
//    }  
//}
//
//console.log("Números entre 1 e 100 divisíveis por 3: " + multiplo)

//10-

let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);

