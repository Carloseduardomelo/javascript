function velomax(velocitade){
    let valor = 70
    let pontoscar = 5
    if( velocitade <= 70){
        console.log('ok')
    }else{
        let pontos = Math.floor((velocitade - 70) / 5)
        if (pontos >= 12){
            console.log('carteira apreendida')
        }else{
            console.log('pontos',pontos)
        }
    }
}

velomax(70)



//! execicio MEDIDOR DE VELOCIDADE