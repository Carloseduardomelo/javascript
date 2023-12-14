function Calculadora(opc){

    let area = 0

    const base = Number(prompt('digite a base'))
    const altura = Number(prompt('digite a altura'))

    switch(opc){
        case 1:
            area = base * altura >> 1
            alert(`A área e: ${area}`)
            break
        case 2:
            area = base * altura
            break
        case 3:
            const lado = prompt('qual o valos do lado ?')
            area = lado << 2
            alert(`A área e: ${area}`)
            break
        case 4:
            const baseMaior = prompt('qual o valos do baseMaior ?')
            const baseMenor = prompt('qual o valos do baseMenor ?')
            area = (baseMaior * baseMenor ) * altura >> 1
            alert(`A área e: ${area}`)
            break
        case 5:
            const raio = prompt('qual a raio ?')
            area = 3.14 * (raio << 2)
            alert(`A área e: ${area}`)
            break
    }

    return area
}

while(true){
    const opc = Number(prompt(`
        
        Calculadora


        [1] Área do triangulo
        [2] Área do retangulo
        [3] Área do quadrado
        [4] Área do trapézio
        [5] Área do circulo
        [6] Sair

    `))

    if(opc == 6){
        break
    }

    Calculadora(opc)
}
