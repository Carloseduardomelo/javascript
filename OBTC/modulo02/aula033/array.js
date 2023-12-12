let arr = [ 'ola mundo' , 10 , 19 , 1 , 'nada']
console.log(arr)

//! push == adicionar na ultima posição do arr um elemento
arr.push('ola push')
console.log(arr)

//! unshift =  adicionar um elemento no começo de um arr
arr.unshift(0)
console.log(arr)

//! pop == remover o elemento da ultima posição do arr
arr.pop()
console.log(arr)

//! shift == remove o primeiro elemento do arr
arr.shift()
console.log(arr)


let dados = new Set([1,2,'ola mundo'])

dados.add('carlos')

//! buscar um item no set, caso tiver return True ou false quando naõ tiver.
console.log(dados.has(1))

console.log(dados)

//! clear limpa todo o set.
dados.clear()

console.log(dados)
