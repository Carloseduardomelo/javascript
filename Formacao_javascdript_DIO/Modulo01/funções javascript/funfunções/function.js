//! Calculo imc

function imc(peso, altura){
    let imc = peso / (altura * altura)

    if(imc < 18.5){
        return console.log('Abaixo do peso')
    }else if(imc >= 18.5 && imc < 25){
        return console.log('Peso ideal')
    }else if(imc >= 25 && imc < 30){
        return console.log('Sobrepeso')
    }else if(imc >= 30 && imc < 40){
        return console.log('Obesidade grau I')
    }else if(imc >= 40 && imc < 50){
        return console.log('Obesidade grau II')
    }else if(imc >= 50 && imc < 60){
        return console.log('Obesidade grau III')
    }
}





function main(peso,altura){
    imc(peso,altura)

}

main(100,2)