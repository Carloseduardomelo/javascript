//! function do execicio de media com exportações e importações

function media(notas) {
    let media = 0
    for (n of notas) {
        media += n
    }
    media = media / notas.length

    if (media < 5) {
        return console.log('reprovado')
    } else if (media > 5 && media < 7) {
        return console.log('Recuperação')
    } else {
        return console.log('Aprovado')
    }
}


module.exports = {
    media
}

//! feito com sucesso
