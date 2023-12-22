//! Desestruturação de objetos e arrays.

//todo:  Desestruturação de objetos:

const pessoa = {
    name: 'carlos',
    age: 17,
    city: 'aliance',

    family: ['rosicleide' , 'jose']
}

//? Dessetruturação de objetos.

const { name , age , city , family } = pessoa
console.log(name, age , city)

//? Dessetruturação de Arrays.

const [ mae , pai ] = family
console.log(mae , pai)


//? Desstruturando paranmetros da function.

const dados = []

const criarPesso = ({name , age , city , family}) => {
    const id = Math.floor(Math.random() * 9999)

    dados.push({
        id: id,
        name: name,
        age: age,
        city: city,
        family: family
    })

    console.log(dados)
} 

const pessoaCriada = criarPesso(pessoa)

console.log(pessoaCriada)