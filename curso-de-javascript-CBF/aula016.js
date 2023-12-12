// //! FOR IN / FOR OF

let dados = [ 2, 34, 56, 78, 12, 90 ]

// //! FOR simplaes
for(let i = 0 ; i < dados.length; i++){
    console.log(dados[i])
}

//! FOR in // O for in e a mesma coisa do for simple com memos trabalho
for(i in dados){
    console.log(dados[i])
}

//! FOR OF // O for of nos não precisamos colocar: "dados[I]", o I ja vai conter todos os valores do arrray
for(i of dados){
    console.log(i)
}