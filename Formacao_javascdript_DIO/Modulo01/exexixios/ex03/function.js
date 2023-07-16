//! function do execicio set salario.



function setsalario(salario, broto){
    if(salario <= 1100){
        return console.log(`seu salarai vai ser de ${(broto + (salario - (salario * 0.05)))}`)
    }else if(salario > 1101 && salario < 2500 ){
        return console.log(`seu salarai vai ser de ${(broto + (salario - (salario * 0.1)))}`)
    }else{
        return console.log(`seu salarai vai ser de ${(broto + (salario - (salario * 0.15)))}`)
    }
}


module.exports = {
    setsalario
}


//! feito com sucesso.