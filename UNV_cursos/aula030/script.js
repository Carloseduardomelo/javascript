let dados = [100 , 80, 96, 100]

function media(dados){
    let soma = 0
    let mediat = 0
     for(i of dados){
        soma += i
        let cont = dados.length
        mediat = soma / cont
     }
     if(mediat > 0 && mediat <= 59)
        return console.log('F')
    if(mediat > 60  && mediat <= 69)
        return console.log('D')
    if(mediat > 70 && mediat <= 79)
        return console.log('C')
    if(mediat > 80 && mediat <= 89)
        return console.log('B')
    if(mediat > 90 && mediat <= 100)
        return console.log('A')
}

media(dados)


//! Calculando media dos alunos