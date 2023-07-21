//! hoisting e a forma que o javasript executa as coisas primeiro.

//* exemple


test()


function test(){
    console.log("ola, mundo")
}

//? Essa function vai funcionar normalmente, porque o javasript vai executar primeiro a function para executar a chamada da function.



test2()


var test2 = function(){
    console.log("teste02")
}

//? Aqui ele vai dar error porque a variavel foi definida depois da chamada da function.