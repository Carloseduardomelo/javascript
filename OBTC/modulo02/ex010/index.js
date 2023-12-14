const vagas = [
]
const listatVagas = () => {
    alert(vagas.length)
}
const criarNovaVaga = () => {

    const name = prompt('digite o nome da vaga')
    const descricao = prompt('digite a descrição da vaga')
    const dataLimite = prompt('digite o tempo limite para siescrever na vaga')
    const quantidadeDeCandidatos = prompt('digite o numero de candidatos')

    vagas.push({
        name: name,
        descricaoP: descricao,
        dataLimite: dataLimite,
        quantidadeDeCandidatos: quantidadeDeCandidatos,
        candidatosIscritos: []

    })

    console.log(vagas[0].name)

}
const VisualizarVaga = () => {
    const opcVaga = Number(prompt(`
        Qual vaga voçe quer ver:
        
        ${vagas.map((items, i) => {
        return `[${i + 1}]: ${items.name}`
    })}
    `))

    alert(`
    name: ${vagas[opcVaga - 1].name}
    descricao: ${vagas[opcVaga - 1].descricaoP}
    data Limite: ${vagas[opcVaga - 1].dataLimite}
    quantidae de Candidtos: ${vagas[opcVaga - 1].quantidadeDeCandidatos}
    quantidade de Candidatos escritos: ${vagas[opcVaga - 1].candidatosIscritos.length}`)
}
const addCandidato = () => {
    const nameCandidato = prompt('digite o seu nome para si candidatar')
    const idadeCnadidato = prompt('digite sua idade')
    const experiênciaCandidato = prompt('digite quanto de expeíẽncia')
    const sexo = prompt('digite seu sexo')

    const opcVagaCandidatar = Number(prompt(`

    Qual vaga voçe quer si candidatar?
          
    ${vagas.map((items, i) => {
        return `[${i + 1}]: ${items.name}`
    })}
    `))

    vagas[opcVagaCandidatar - 1].candidatosIscritos.push({
        name: nameCandidato,
        idadeCnadidato: idadeCnadidato,
        experiênciaCandidato: experiênciaCandidato,
        sexo: sexo
    })
}
const RemoverVaga = () => {
    const opcVagaRemove = Number(prompt(`

    Qual vaga voçe quer remover
          
    ${vagas.map((items, i) => {
        return `[${i + 1}]: ${items.name}`
    })}
    `))

    vagas.slice(opcVagaRemove - 1, 1)
}
while(true){
    const opc = Number(prompt(`
        [1] Listar vags desponiveis
        [2] Criar um nova vaga
        [3] Visualizar uma vaga
        [4] increver um candidado em uma vaga
        [5] exluir uma vaga
        [6] Sair
    `))
    if (opc === 1) {
        listatVagas();
      } else if (opc === 2) {
        criarNovaVaga();
      } else if (opc === 3) {
        VisualizarVaga();
      } else if (opc === 4) {
        addCandidato();
      } else if (opc === 5) {
        RemoverVaga();
      } else if (opc > 6) {
        console.log("Opção inválida!");
      }else if(opc == 6){
        break
      }else{
      }
}