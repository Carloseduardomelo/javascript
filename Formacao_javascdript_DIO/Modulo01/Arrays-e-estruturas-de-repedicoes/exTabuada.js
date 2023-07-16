

//! execicio da tabuada

function tabuada(numero){
    for(var i = 1 ; i <=10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}


function rep(){
    for(let b = 1; b <=+ 10; b++){
        tabuada(b)
    }
}

rep()


//! feio com suceso e melhorador