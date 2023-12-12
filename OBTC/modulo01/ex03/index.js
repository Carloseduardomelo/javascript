const numero = prompt('digite um valor em metros para comverter')

const opc = prompt(`
    [1] milimetro
    [2] centrimetro
    [3] decimetro
    [4] decÂmetro
    [5] hectômetro
    [6] quilometro
`)


let comvercao

switch (opc){
    case '1':
        comvercao = numero / 1000
    case '2':
        comvercao = numero / 100
    case '3':
        comvercao = numero / 10
    case '4':
        comvercao = numero * 10
    case '5':
        comvercao = numero * 100
    case '6':
        comvercao = numero * 1000
}

alert(comvercao)