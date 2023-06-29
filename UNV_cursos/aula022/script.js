//? O for..in e muito utilizado para pecorre arrays e objetos em javascript
//? No for..in não presisamos passa verificação e men incremento

//* Para percorer um arrays e assim com o FOR..IN

let dados = ['carro', 'vento', 'fogo', 'chuva']
for(let key1 in dados){//todo/ aqui ele vai pegar o indeci de cada valor da array
    console.log(dados[key1])//todo/ aqui vamos acessar cada valor pelo seu indici
    //? si passamos so a key1 ele vai retorna so os indici do array
}


//* Para percorre um objeto
//? E quase a mesma coisa de percorrer um array mais com objeto
console.log('')

let dados2 = {
    nome: 'carlos',
    idade:20,
    cidade:'sp'
}

for(let key2 in dados2){
    console.log(dados2[key2])//! caso so passar o key2 ele vai retornar so a chave do objeto
}

//todo/ obs: sempre lembre de passar o key para percorer todos os valores dentro de um objeto


//! FOR..IN