//! execicio de calculo de preço

var preco = 100
var opciones = 4

if (opciones === 1) {
    console.log(preco - (preco * (10 / 100)))
}else if (opciones === 2) {
    console.log(preco - (preco * (15 / 100)))
}else if (opciones === 3) {
    console.log(preco)
}else{
    console.log(preco + (preco * (10 / 100)))
}


//!execicio completo de preço