//! o JOIN ele e um jundador de string

//? exemple

let dados = [1,2,3,4,5,6,7,8,9,10]

console.log(dados.join(' / '))

let nome = [{nome:'carlos'} , {nome: 'caroline'} , {nome:'arro'}]

let final2 = nome.map(final => final.nome).filter((final) => final.startsWith('c')).join(' / ')

console.log(final2)

//! muito bom o join

//todo; obs: estudar mais sobre isso.


// let nada = ['carlos' , 'nada']
// let f = nada.filter((nada) => nada.startsWith('c'))
// console.log(f)