let contador = 0 
const dadosPacientes = []

while (true){

    const dadosPrompt = Number(prompt(`
        Fila de espera dos pacientes

        ${dadosPacientes.map(item => item).join(`
        `)}

        opçoes:

        [1] Adicionar pacientes
        [2] chamar paciemte
    `))

    if(dadosPrompt == 1){
        const namePaciente = prompt('digite o nome do paciente')
        dadosPacientes.push(namePaciente)
    }else if(dadosPrompt == 2){
        dadosPacientes.shift()
    }else{
        alert('opção invalida')
    }

}