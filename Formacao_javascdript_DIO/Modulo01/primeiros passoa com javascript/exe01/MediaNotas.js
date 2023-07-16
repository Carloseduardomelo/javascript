//! execicios do calculo da media de notas

var nota01 = 7
var nota02 = 9
var nota03 = 8
var nota04 = 9

var media = (nota01 + nota02 + nota03 + nota04) / 4

if (media  < 5){
    console.log('reprovado')
}else if (media >= 5 && media <= 7){
    console.log('recuperação')
}else{
    console.log("aprovado")
}