while(true){
    const opc = Number(prompt(`
        [1] arroz
        [2] feijão
        [3] suco
        [4] agua
        [5] encerra
    `))

    if(opc <= 4 && opc >= 1){
        alert(`voce escolheu ${opc}`)
    }else if(opc == 5){
        break
    }
}