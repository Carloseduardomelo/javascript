let pessoas = []

while (true) {

    const opc = Number(prompt(`

        Pacientes:

        ${pessoas.join(`
        `)}
        
        [1] Novo paciente 
        [2] Consutar paciente
        [3] Sair
    `))

    if (opc == 1) {
        const pacients = prompt('digite o nome do paciente')
        pessoas.push(pacients)
    } else if (opc == 2) {
        pessoas.shift()
    } else if (opc == 3) {
        break
    }
}