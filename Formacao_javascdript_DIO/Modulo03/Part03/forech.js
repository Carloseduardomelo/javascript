//! FOREACH



console.log('-----------------------forEACH--------------------------------')

var dados = [1,2,3,4,5,6,7,8,9,10]

dados.forEach((value , index, listref) =>{ //! para percorrer o array, nele nos podemos pegar o VALUE o INDEX e o LISTREF
    console.log(value ) //? pegando so o value que são : 1 2 3 4 5 6 7 8 9 10.
})


console.log('-----------------------fFOR IN--------------------------------')



for(resp in dados){ //! fazes a mesma coisa do de cima hahaahah, so que aqui nos so podemos pegar o index do array
    console.log(dados[resp])
}


//! lembrando o FOFR IN nao e a mesma coisa do FOREACH.