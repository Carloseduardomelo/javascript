function TesteDeVevocidade(name01,name02, velocidade01, velocidade02){
    if(velocidade01 > velocidade02) return console.log(`o ${name01} estar mais rapido do que o ${name02}`)
    if(velocidade02 > velocidade01) return console.log(`o ${name02} estar mais rapido do que o ${name01}`)
    if(velocidade01 == velocidade02) return console.log(`o ${name01} estar na mesma velocidade que ${name02}`)
}

TesteDeVevocidade('carlos' , 'biu' , 500,500)