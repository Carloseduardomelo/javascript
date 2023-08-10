function quantos(anos){
    let text = `Daqui a ${anos} anos ${this.nome} tera ${this.idade + anos}`
    return text
}

let nada = {
    nome: "maria",
    idade: 20
}

console.log(quantos.call(nada,12))
console.log(quantos.apply(nada, [9]))

