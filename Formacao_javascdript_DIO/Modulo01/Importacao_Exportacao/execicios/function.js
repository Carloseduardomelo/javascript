//! function exportada para o execicicio de importação e de exportação


function maior(dados){
    var maior = 0;
    for (var i=0; i< dados.length; ++i){
        if (maior > dados[ i ]){
            maior = maior
        }else{
            maior = dados[ i ]
        }
    }
    return console.log(maior)
}

module.exports = {
    maior
}

//? exportação feiota com sucesso hahahahahaah