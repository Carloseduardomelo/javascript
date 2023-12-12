const inmoveis = []

while (true) {

    const opc = Number(prompt(`
    
    Quantidades de moves cadrastados: ${inmoveis.length}
    

    [1] Cadastra novo nmovel
    [2] mostra inmoveis
    [3] Sair
    `))


    if(opc == 1){

        const name = prompt('digite o nome do  propietario')
        const quartos = prompt('Qauntos quartos de no inmovel')
        const banheiro = prompt("digite quandos banheirotem no inmovel")
        const garagem = confirm('tem garagem ?')

        inmoveis.push({
            name: name,
            quartos: quartos,
            banheiro: banheiro,
            garagem:garagem,
        })
    }else if(opc == 2){
        console.table(inmoveis)
    }else if(opc == 3){
        break
    }
}