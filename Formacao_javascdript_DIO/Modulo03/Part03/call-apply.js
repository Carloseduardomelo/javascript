//! oo CALL e o APPLY são metodos que serven para invocar uma function.

//? exemple

var pessoa ={ //! objeto.
    nome:'carlos',
    idade: 10
}

function gritarNome(p){
    console.log(p , this.nome) //! aqui ele ta pegando o nome do objeto de vai entrar no parametro.
}

gritarNome.apply(pessoa , ['olaaaaaa']) //todo; aqui precisamos passar dentro do array.
gritarNome.call(pessoa , 'olaaaaaa') //todo; aqui nõa percisamos passar dentro do array, so separado por virgula.

//!exemplo de invocar uma function rideta.