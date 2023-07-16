//! execicio do qualcule o preço


function calcularPreco(preco, option){

    if(option ===1){
        console.log(preco - (0.1 * preco))
    }else if(option === 2){
        console.log(preco - (0.15 * preco))
    }else if(option === 3){
        console.log(preco)
    }else if(option === 4){
        console.log(preco + (0.1 * preco))
    }else{
        console.log('option invalid')
    }
}

function main(preco, option){
    calcularPreco(preco, option)
}

main(100,1)