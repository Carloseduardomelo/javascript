function somaNumeros( n1: number , n2: number , calbeck: (numero: number ) => number ): number {
    let resultado = n1 + n2
    return calbeck(resultado)
}

function alq(numero: number){
    return numero * numero
}
console.log(somaNumeros(10 , 5 , alq))