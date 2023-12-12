const cartas = [' A de cobas ' , ' A de espadas']


while (true){
    const opc = Number(prompt(`
    
    Cartas do baralho:

    ${cartas.join(`
    `)}


    [1] Adicionar mais uma carta 
    [2] Puxar uma carta do baralho
    [3] Sair
    `))


    if(opc == 1){
        const novaCarta = prompt(`digite o name da carta para ser adicionada`)
        cartas.unshift(novaCarta)
    }else if(opc == 2){
        alert(`A CArta de que voce puxou foi o "${cartas[0]}"`)
        cartas.shift()
    }else if(opc == 3){
        break
    }
}