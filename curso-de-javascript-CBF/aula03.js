//todo:::: Variaves: Let , Var e Const


//! o var o escopo dela e global, com o var consiguinos reatribuir valores.
//! o let o escopo dela e local, com o let nos consiguinos reatribuir valores.
//! o const o escopo dela e local, com o const não podemos reatribuir valores.

//? exemple Var ('escopo global')
if(true){
    var nome = 'carlos'
}

console.log(nome)


//? exemple let ('escopo local') 
//! obs: vai dar erro porque o escopo do let vai ficar limitado no if.
if(true){
    let nome01 = 'maria'
}

console.log(nome01)


//? exemple de const ('escopo local e não podemos reatribuir valores')
//! obs: vai dar erro por causa do espoco e por calsa da reatribução do valor
if(true){
    const nome02 = 'ana'
    nome02 = 'meu'
}

console.log(nome02)