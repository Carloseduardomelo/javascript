function calcular(a, b , operacao){
    return operacao(a,b)
}

function soma(x , y){
    return x + y
}


console.log(calcular(10 ,10 , soma))
console.log(calcular(10 ,10 , (x , y) =>  x + y))
