const numero = 0
const indefinido = undefined


const nome = ''

if (nome) {
    console.log('Olá,', nome)
} else {
    console.log('Ainda não sei seu nome')
}

//const idade = 19
//
//if (idade != null && idade >= 18) {
//    console.log('Maior de idade')
//} else if (idade != null && idade >= 0 && idade < 18) {
//    console.log('Menor de idade')
//}

const idade = null

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade')
    }
}