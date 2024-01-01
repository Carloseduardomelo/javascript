// const a = 42

// const b = 0 && a
// console.log(b)

// b = false && a
// console.log(b)


// b = null && a
// console.log(b)

// b = undefined && a
// console.log(b)


const dados = [1,2,3,4,5,6,7,8,9,10,11,12,13] 

if(dados.length % 2 == 0){
    const mediana = ( (dados.length / 2) + ((dados.length / 2 ) + 1)) / 2
    console.log(mediana)
}else{
    const mediana = parseInt((dados.length / 2) + 1)
    console.log(mediana)
}