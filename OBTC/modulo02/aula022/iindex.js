const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


let dadosRaca = {
    orc: {},
    humano:{},
    anao:{},
    elfo:{}
}

let contOrc = 1
let Humano = 1
let Elfo = 1
let anao = 1
personagens.map((items) => {
    if(items.raca == 'Orc'){
        dadosRaca.orc[contOrc] = {
            name: items.nome,
            nivel: items.nivel,
            raca: items.raca,
            classe: items.classe
        }
        contOrc++
    }else if(items.raca == 'Humano'){
        dadosRaca.humano[Humano] = {
            name: items.nome,
            nivel: items.nivel,
            raca: items.raca,
            classe: items.classe
        }
        Humano++
    }else if(items.raca == 'Elfo Noturno'){
        dadosRaca.elfo[Elfo] = {
            name: items.nome,
            nivel: items.nivel,
            raca: items.raca,
            classe: items.classe
        }
        Elfo++
    }else if(items.raca == 'Anão'){
        dadosRaca.anao[anao] = {
            name: items.nome,
            nivel: items.nivel,
            raca: items.raca,
            classe: items.classe
        }
        anao++
    }
})


// console.log(dadosRaca)



// const racas = personagens.reduce(function (acumulador, personagem) {
//     if (acumulador[personagem.raca]) {
//       acumulador[personagem.raca].push(personagem)
//     } else {
//       acumulador[personagem.raca] = [personagem]
//     }
//     return acumulador
//   }, {})

// console.log(racas)



// personagens.sort((a , b) => {
//     return b.nivel - a.nivel
// })

// console.log(personagens)


// soma(10,10)

// function soma(x ,y){
//     console.log(x+y)
// }