//! Diferenças entre VAR , LET e CONST

//* exemple VAR

if(true){
    var cont = 10
}

console.log(cont) //? Nesse caso vai dar tudo certo, ele vai retorna 10. Por que o VAR ele e global, menos em function.


//* exemple LET

if(true){
    let cont2 = 10
}

console.log(cont2) //? Nesse caso vai tar erro porque o LET ele si limita a qualquer bloco de codigo.


//* Exemple CONST

if(true){
    const cont3 = 10
}

console.log(cont3 = 1) //? Aqui vai dar 2 erros, 1: o CONST e a mesma coisa do LET ele si limita a qualquer bloco de codigo, 2: o valor de uma const nao pode ser reatribuito.


//! Essas são as diferenças entre VAR , LER e CONST.