"use strict";
function somaNumeros(n1, n2, calbeck) {
    let resultado = n1 + n2;
    return calbeck(resultado);
}
function alq(numero) {
    return numero * numero;
}
console.log(somaNumeros(10, 5, alq));
