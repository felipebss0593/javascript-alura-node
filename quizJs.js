const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo(a) ao quiz de JavaScript!');
console.log('Responda com a letra correta: a,b ou c\n')

let acertos = 0

rl.question('1) Qual palavra usamos para criar uma função?\na) define\nb) function\nc) create\n> ', (resposta1) => {
    if(resposta1 === 'b') {
        acertos++
    }
    rl.question('2) Qual dessas é uma estrutura de repetição?\na) loopar()\nb) repeat\nc) for\n> ', (resposta2) => {
        if(resposta2 === 'c') {
            acertos++
        }
        rl.question('3) Qual o valor é considerado falsy em JavaScript?\na) 1\nb) 0\nc) "texto"\n> ', (resposta3) => {
            if(resposta3 === 'b') {
                acertos++
            }

            if(acertos == 3) {
                console.log('Parabéns! você acertou tudo')
            }else if(acertos == 2) {
                console.log('Muito bom! continue assim!')
            }else {
                console.log('continue praticando')
            }

            rl.close();
        });
    });
});