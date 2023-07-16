//! execicio de calculo do imc

var peso  = 85
var altura = 1.87

var imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc < 25) {
    console.log('Peso ideal')
} else if (imc < 30) {
    console.log('Sobrepeso')
} else if (imc < 40) {
    console.log('Obesidade')
} else {
    console.log('Obesidade mórbida')
}

//! execicio feio com sucesso