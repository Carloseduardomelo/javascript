class pessoa{
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    de(){
        console.log(`o nome dela e ${this.nome} e ela tem ${this.idade} anos`)
    }
}

const p1 = new pessoa('maria', 25)
const p2 = new pessoa('juliaana', 25)

function analisapes(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`A ${p1.nome}  e mais velha que ${p2.nome}`)
    }else if (p1.idade < p2.idade){
        console.log(`A ${p2.nome} e mais velha que ${p1.nome}`)
    }else{
        console.log('elas tem a mesma idade')
    }
}

analisapes(p1,p2)


//! obs estudar mais classes estou muito ruim em classes
