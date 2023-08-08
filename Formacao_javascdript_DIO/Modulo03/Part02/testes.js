var pessoa = function(nome, idade , cit){
    this.nome = nome
    this.idade =idade
    this.cit = cit
}

var carlos ={
    rio: 'sirigi',
    cpf: 175349825
}

pessoa.call(carlos , 'carlos', 19, 'sp') //! vai add todos os atributos para carlos.

console.log(carlos)