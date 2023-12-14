function media([...valores]){

    let media = 0

    for(i of valores){
        media += i
    }

    return (media / valores.length)
}

const dados = [1 , 5 ,9 , 2 , 2 , 6]

console.log(media(dados))