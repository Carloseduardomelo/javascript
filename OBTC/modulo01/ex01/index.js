const fristNAme = document.getElementById('frist-name')
const lastName = document.getElementById('lest-name')
const studant = document.getElementById('studant')
const ano = document.getElementById('ano')
const button = document.getElementById('button')



const infs = new Set([])


const clear = () => {
    fristNAme.reset
}


const registro = () => {

    if(!fristNAme.value) throw new Error('frist name ivalid')
    if(!lastName.value) throw new Error('last name ivalid')
    if(!studant.value) throw new Error('studant ivalid')
    if(!ano.value) throw new Error('Ano ivalid')


    infs.add({
        fristNameR: fristNAme.value,
        lastNameR: lastName.value,
        studantR: studant.value,
        anoR:Math.abs(ano.value - 2023)
    })
}

button.addEventListener('click' , () => {
    registro()
    console.log(infs)
    clear()
})