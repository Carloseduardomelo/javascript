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
    if (tecnolodias.style.display == 'none') {
        tecnolodias.style.display = 'block'
    } else {
        tecnolodias.style.display = 'none'
    }
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

Adicionar.addEventListener('click', verificar)


remover.addEventListener('click', apagar)

cadastro.addEventListener('click', () => {

    cadastroDEV()

    console.log(dados)

    apagar()


    nameCompleto.value = ''
})

