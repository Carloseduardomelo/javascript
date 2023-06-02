var idade = 66
console.log(`voce tem ${idade} anos`)
if (idade < 16){
    console.log('voce não pode vota')
}else{
    if (idade < 18 || idade > 65){// sempre colocar o menor que para ficar certo
        console.log('voto apicional')
    }else{
        console.log('pode votar voce tem mais de 18 anos')
    }
}