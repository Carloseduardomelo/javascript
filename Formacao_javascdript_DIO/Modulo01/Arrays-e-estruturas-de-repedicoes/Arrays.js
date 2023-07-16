//! Arrrays são listas de valores tipo os objetos.

//? Para fazer so tem que ta ciente que o indice dos arrays começão sempre no zero.

//* exemple.

const dados = ['carlos', 'mia', 10, 5, 7,]
console.log(dados)


//* exeple de add item.

dados.push(0) //todo; com isso ele vai add um item no array.
console.log(dados)


//* exemple de remove item.

dados.pop(0) //todo; com isso ele vai remove um item no array.
console.log(dados)


//* exemple de percorreção do array.
//!       in       //
for(items of dados){ //todo; com isso ele vai percorre do array item pos item.
    console.log(items)
}