//! finction comstrutora.
console.log('-----------------------CARLOS-----------------------------------')
var dados = { //! objeto que vai ser passado na function comstrutora.
    cit: 'rio',
    funt: function () {
        return 'ola, mundo'
    }
}
var arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function Pessoa(nome, idade, cpf, dados, arrays) { //? function comstrutora, ela serve para construir alguma coisa hahahahahha.
    this.nome = nome
    this.idade = idade
    this.cpf = cpf
    this.dados = dados
    this.arrays = arrays
    this.funts = function(){ //!" tbm podemos fazer function dentro de function comstrutoras"
        return 'ola jgnsuign'
    }
}


var carlos = new Pessoa('carlos', 10, 394144, dados, arrays) //! nos estamos literalmente criando uma intancia de uma pessoa que vai si chamar carlos e ele vai erdar todas as caracteristicas da pesso como o nome , idade e cpf. 

//! tbm podemos passar function dentro de uam function comstrutora e objetos com function e arrays

carlos.number = 10 //!add o atributo de number para carlos so para ele si eu quiser add em outro vuo ter fazer com todos eles

console.log(carlos.dados.funt())


console.log('-------------------------NADA----------------------------------')


var nada = new Pessoa('carlos', 10, 4623568, dados, arrays)

console.log(nada.arrays)


console.log('-------------------------REI----------------------------------')

//! outro jeito de fazer function comstrutora.

class pessoas {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar2(){
        return 'ola, mundo'
    }
}


var rei = new pessoas('carlos', 10)

console.log(rei.falar2())

//! Esses foram ulgums exemplos de function comstrutoras.