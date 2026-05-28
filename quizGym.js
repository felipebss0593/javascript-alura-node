const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log('Seja Bem-vindo(a) ao quiz de musculação')
console.log('Responda com a letra correta: a,b, ou c\n')

let acertos = 0 

rl.question('1) Aonde fica localizado o Sartorio?\na) nas costas\nb)na parte da frente da coxa\nc)na parte de trás da coxa\n>', (resposta1) => {
    if(resposta1 === 'b') {
        acertos++
    }
    rl.question('2) Aonde fica localizado os Romboídes?\na) Entre o ombro e o tricpes\nb) na Dorsal\nc) centro das costas\n> ', (resposta2) => {
       if(resposta2 === 'c') {
        acertos++
       }
       rl.question('3) Aonde fica localizado o músculo Sóleo?\na) no quadriceps\nb) no braço\nc) na paturrilha\n> ', (resposta3) => {
               if(resposta3 === 'c') {
                 acertos++
               }

               if(acertos == 3) {
                console.log('Aii, você tá demonstrando a ESSÊNCIAA')
               }else if(acertos == 2) {
                console.log('É..., já da pra sair na mão com o motoqueiro')
               }else {
                console.log('FRANGO. musculação é pra lá, AQUI É TREINO')
               }

               rl.close();
       });
    });
});