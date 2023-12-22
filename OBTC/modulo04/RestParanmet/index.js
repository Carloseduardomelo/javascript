let somaR = 0 
const soma = ([...numeros]) => {

    for(i of numeros){
        somaR += i
    }

    return somaR
}

console.log(soma([1,2,3,4,5,6,7,8,9]))
