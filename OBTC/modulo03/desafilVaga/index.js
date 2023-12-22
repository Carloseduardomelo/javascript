let dados01 = [1,2,3,4,5,6,7,8,9]
let primo = []
let NoaPrimo = []

const Eprime = (dados) => {

    dados.map(item  => {
        if(item == 0 || item == 1){
            console.log('não')
        }else{
            for(let i = 2; i <= item; i++){
                if(item / 1 === item && item / i === 1){
                    primo.push(item)
                }else{
                    NoaPrimo.push(item)
                }
            }
        }
    })

    console.log(primo)
}

Eprime(dados01)
console.log(primo)