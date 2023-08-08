var dados0 ={
    cite: 'SP',
    rio:'sirige',
    falar: function(){
        return 'falar'
    }
}



var dados1 = {
    nome: ' carlos',
    idade: 10,
    __proto__: dados0
}

var dados2 = {
    cpf: 10101010,
    __proto__: dados1
//* dados: mesma coisa do proto. "mais o proto e melhor"
    
    //? o proto ele busca informações do objeto passado para ele, ele vai percorrer o objeto todo passa ele não axe ele vai busca no outro objeto que foi passado para ele.
}

console.log(dados2.falar())