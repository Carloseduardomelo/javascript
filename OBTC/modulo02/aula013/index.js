
//!A ordem dos parâmetros é importante

const dadosPessoa = []

function novaPessoa(name , age , senha, tipo='leitor'){
    const objetoPessoa = {
        name: name,
        age: age,
        senha: senha,
        tipo: tipo
    }

    dadosPessoa.push(objetoPessoa)

    console.log(dadosPessoa)
}

novaPessoa( 'carlos' , 17 , 12344 )


//! function com muitos parametros, usando objetos.

const dados = {
    name: 'carlos',
    age: 26,
    city: 'alianci'
}

function mostraDAdos(dados){
    console.log(dados.name)
    console.log(dados.age)
    console.log(dados.city)
}

mostraDAdos(dados)