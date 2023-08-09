// let text = 'ama'

// function revet(text){
//     if(!text) return
//     if(text.split('').reverse().join('') === text.split('').reverse('').join('')){
//         console.log('a palavra de tras para fermte e a mesma coisa')
//     }else{
//         console.log('as palavras não são enguais de  tras para frem')
//     }
// }

// revet()

// // console.log(text.split('').reverse('').join(''))


//! =========================================

function nada(array){
    for(let i = 0 ; i <= array.length; i++){
        if(array[i] %  2 === 0){
            array[i] = 0
        }
    }
    return console.log(array.join(' '))
}

let nada1 = [ 1,2,3,4,5,6,7,8,9,10]
nada(nada1)
