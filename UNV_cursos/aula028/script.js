function ler(items){
    for(let i in items){
        if (typeof items[i] == 'string'){
            console.log(items[i])
        }
    }
}


let items = {
    nome:'carlos',
    idade: 15,
    cite:'norte'
}

ler(items)



//! execicio 