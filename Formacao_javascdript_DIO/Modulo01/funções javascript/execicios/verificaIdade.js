//! execicio vericação de idade


function verificaidade(idade){
    if (idade < 18){
        console.log('voce e menor de idade')
    }else if (idade > 18){
        console.log('voce e maior de idade')
    }
}

function main(idade){
    verificaidade(idade)
}

main(20)