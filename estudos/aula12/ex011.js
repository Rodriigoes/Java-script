var idade = 77
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else {
if (idade > 18)
    console.log('Vota')
}  


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('bom dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}