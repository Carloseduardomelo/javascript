//! O REDUCE ele vai reduxir ate so sobrar um.

//? exeple

let dados = [1,2,3,4,5,6,7,8,9,10]

var final = dados.reduce((previo ,current) =>{
    console.log(previo, current)
    return previo + current
}, 0)

console.log(final) //! vai retornar a soma de todos os numeros do arrays


//?muito bom o REDUUCE