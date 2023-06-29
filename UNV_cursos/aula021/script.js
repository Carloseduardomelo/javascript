//? A grande diferença entre o while e o do..while e que o do..while executa primeiro e verifica depois

//? tambem presizamos definir a variavel fora do laço

let i = 1

do{
    console.log(`voce vio isso ${i} vezes`)
    i++
}while( i <= 10 )

console.log(``)
console.log(`numeros pares`)
console.log(``)

let par = 1

do{
    if(par % 2 == 0){
        console.log(`o numero ${par} e par`)
    }
    par++
}while(par <= 10)





//! laço de repetição DO...WHILE