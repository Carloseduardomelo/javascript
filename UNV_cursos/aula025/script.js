function fizzbuzz(entrada){
    if (typeof entrada != 'number')
        return 'nao e um numero'
    if ( entrada % 3 === 0 && entrada % 5 === 0)
        return 'fizzbuzz'
    if ( entrada % 3 === 0)
        return 'fizz'
    if ( entrada % 5 === 0)
        return 'buzz'
    return entrada
}

let res = fizzbuzz(15)
console.log(res)