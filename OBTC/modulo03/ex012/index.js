const tecnolodias = document.getElementById('tecnolodias')
const Adicionar = document.getElementById('Adicionar')
const remover = document.getElementById('remover')
const cadastro = document.getElementById('cadastro')
const nameCompleto = document.getElementById('nameCompleto')
const nameTecnologia = document.getElementById('nameTecnologia')
const radios01 = document.getElementById('radios01')
const radios02 = document.getElementById('radios02')
const radios03 = document.getElementById('radios03')

const dados = []

const verificar = () => {
}

const apagar = () => {
    tecnolodias.style.display = 'none'
    nameTecnologia.value = ''
    radios01.checked = false
    radios02.checked = false
    radios03.checked = false
}

const cadastroDEV = () => {
    radios01.checked ? dados.push([
        nameCompleto.value,
        nameTecnologia.value,
        radios01.value
    ]) : console.log('')

    radios02.checked ? dados.push([
        nameCompleto.value,
        nameTecnologia.value,
        radios02.value
    ]) : console.log('')

    radios03.checked ? dados.push([
        nameCompleto.value,
        nameTecnologia.value,
        radios03.value
    ]) : console.log('')
}

Adicionar.addEventListener('click', () => {
    const section = document.createElement('section')
    const inputText = document.createElement('input')
    const inputRadio01 = document.createElement('input')
    const inputRadio02 = document.createElement('input')
    const inputRadio03 = document.createElement('input')
    const button = document.createElement('button')

    inputRadio01.type = 'radio'
    inputRadio02.type = 'radio'
    inputRadio03.type = 'radio'
    inputText.type = 'text'
    button.className = 'buttonRemover'

    tecnolodias.appendChild(section)
    section.appendChild(inputText)
    section.appendChild(inputRadio01)
    section.appendChild(inputRadio02)
    section.appendChild(inputRadio03)
    section.appendChild(button)
})



remover.addEventListener('click', apagar)

cadastro.addEventListener('click', () => {

    cadastroDEV()

    console.log(dados)

    apagar()


    nameCompleto.value = ''
})

