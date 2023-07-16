//! os objetos são muitos usados no dia a dia, o console.log eu um objeto

//todo: obs: tenha em mente que um objeto sempre tem uma key e um value

//* exemple de objetos

const nomes = {
    nome01: 'carlos',
    nome02: 'eduardo'
//! KEY    | VALUE
}

console.log('Mostrando o objeto')
console.log(nomes)
console.log('')
//? com isso ele vai mostra o objeto com as informações

//? Para acessar um certo valor de um objeto e preciso do indeci

//* exemple de pegar value de um objeto
console.log('Mostrando o valor do nome01')
console.log(nomes.nome01)
//!                KEY  | com isso e vai mostra "CARLOS"
console.log('')

//? para percorrer um objeto por completo nos usamos o [FOR IN e o FOR OF]

//* exemple de pecorendo o objeto

console.log('pecorendo o objeto com FOR IN: ')
for(dado in nomes){
    console.log(dado)
}

// //* exemple percorrer um objeto com FOR OF
// for(dados of nomes){
//     console.log(dado02)
// }
console.log('')

//? Tbm podemos criar función dentro de um objeto:

//* exemple de criar función dentro de um objeto
console.log('criar función dentro de um objeto')
const pessoa = {
    nome: 'carlos',
    idade: 20,
    des: function (){
        return console.log(`Olá ${this.nome}`)
    }
}
pessoa.des()

//todo: obs: sempre use o this com for fazer isso.


//! Esses são exemplos de objetos e percorre um objeto