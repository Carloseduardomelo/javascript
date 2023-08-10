//! Spread

function soma(x,y,z){
    return x + z +y
}

let dados =[1,2,3]
console.log(soma(...dados))//todo: os tres pontos vai pegar cada item do array e passar como parametro da function


//! rest

function ar(...ar){ //todo: esses tres pontos fazer que os argumentos passados para a function vão ser add a um array
    console.log(ar.length)
}

ar(1,2,3,4,5,6,7,8,9,10)


//! ballbeck

function tudo(para, x,y){
    return para(x,y)
}

function soma02(x,y){
    return x + y
}

console.log(tudo(soma02, 3 ,3))