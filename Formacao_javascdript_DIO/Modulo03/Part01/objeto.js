const dados ={
    cpf: 12345678,
    nome: 'carlos',
    cite: 'nada',

    descrito: function(){
        console.log(`o cliente ${this.nome} morra em ${this.cite} e o cpf dele e ${this.cpf}`)
    }
}

dados.descrito()


//! exemple de objetos.