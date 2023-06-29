function mult(valor){
    let soma1 = 0
    let soma2 = 0
    for (let i = 1; i <= valor ; i++){
        if (i % 5 === 0){
            soma1 += i
        }else if (i % 3 === 0){
            soma2 += i
        }
    }
    return console.log(soma1 + soma2)
}

mult(10)


//! execicio multiplo de 3 e 5