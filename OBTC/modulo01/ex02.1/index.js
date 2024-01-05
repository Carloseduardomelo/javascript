function VerificarDano(namePrese01 , poderPerse01 , namePrese02 ,pontosDeVidaperson02, pontosDeDefesaperson02 , escudo ) {

    let dadoCausado = 0

    if(poderPerse01 > pontosDeVidaperson02 || escudo){
        dadoCausado = poderPerse01 - pontosDeDefesaperson02
    }else if(poderPerse01 > pontosDeVidaperson02 && escudo){
        dadoCausado = ( poderPerse01 - pontosDeDefesaperson02 ) / 2
    }else if(poderPerse01 <= pontosDeVidaperson02) {
        dadoCausado = 0
    }
    

    pontosDeVidaperson02 -= dadoCausado

    let dados = {
        namePrese01 : namePrese01,
        poderPerse01: poderPerse01,
        namePrese02: namePrese02,
        pontosDeVidaperson02: pontosDeVidaperson02,
        pontosDeDefesaperson02: pontosDeDefesaperson02,
        escudo: escudo
    }

    return dados
}

console.log(VerificarDano('carlos' , 1000, 'saitama', 1000, 500,true))