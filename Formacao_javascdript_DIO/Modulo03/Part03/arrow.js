//! as arrow function e bem simples de fazer

//?exemple

var carlos = () =>{
    console.log('carlos')
}

carlos()


//! um problema das arrow function eque o THIS não se aplica a elas.

//?exemple

var nada1 = function(){
    console.log(this)
}

var nada2 = () =>{
    console.log(this)
}

var nada3 = {
    nome: 'carlos',
    nada1,
    nada2
}


nada3.nada1() //? vai mostrar todos os items do objeto
nada3.nada2()//? vai mostrar nada porque o this n si aplica a arrow function.


//! exemplos de ARROW function e sua desvantagens