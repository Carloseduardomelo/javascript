let dados ={
    0:{ name: "Maria", id: 0 },
    1:{ name: "João", id: 1 },
    2:{ name: "Pedro", id: 2 },
    3:{ name: "Ana", id: 3 },
    4:{ name: "José", id: 4 },
    5:{ name: "Francisco", id: 5 },
    6:{ name: "Isabel", id: 6 },
    7:{ name: "Luís", id: 7 },
    8:{ name: "Carlos", id: 8 },
    9:{ name: "Beatriz", id: 9 }
}


const keys = Object.keys(dados)
const arrys = []


    keys.map((itemsA) => {
        Object.keys(dados[itemsA]).map((itemsB) => {
            if(typeof(dados[itemsA][itemsB]) == 'string'){
                arrys.push(dados[itemsA][itemsB])
            }
        })

    })

console.table(arrys)