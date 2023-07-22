//! o MAP ele uma function para mapear um array ou um objeto.

class pessoa{
    constructor(nome){
        this.nome = nome
    }
}

var lista = [ new pessoa('carlos'), new pessoa('nada') , new pessoa('ahahahah')] //! criaando novas pessoas.

var nada = lista.map((value) =>{ //! aqui ele esta fazendo o mapeamento dos elementos e colocando no value.
    console.log(value.nome)
})



//! exemple de MAP acima.