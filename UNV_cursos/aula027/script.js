function par_impar(valor){
    for(let cont = 0; cont <= valor; cont++){
        if (cont % 2 === 0){
            console.log(`${cont} "par"`)
        }else{
            console.log(`${cont} "impar"`)
        }
    }
}



par_impar(10)




//!execio