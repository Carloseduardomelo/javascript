function aprovado(obj){
    let novo = []
    let notas = []
    for(i in obj){
        if(obj[i] >=7 ){
            novo.push(String(i))
            notas.push(obj[i])
        }
    }
    return novo
}

let alunos = {
    carlos: 10,
    mia: 5,
    bia: 8
}

console.log(`os alunos que forom aprovados são: ${aprovado(alunos).join(" , ")}`)
