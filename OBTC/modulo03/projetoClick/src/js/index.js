const tela = document.getElementById('tela')

const divsAdd = []
let cont = 0
let cont02 = 0
let cont03 = 0
const divAdd02 = []

tela.addEventListener('click', (ev) => {

    const div = document.createElement('div')

    div.style.width = '10px'
    div.style.height = '10px'
    div.style.backgroundColor = 'black'
    div.style.position = 'absolute'
    div.style.top = `${ev.y}px`
    div.style.left = `${ev.x}px`
    div.style.borderRadius = '50%'

    tela.appendChild(div)

    divsAdd.push(tela.children[cont])
WWW
    cont++

    console.log(divsAdd)

})

const remo = document.getElementById('remo')

remo.addEventListener('click', () => {

    if (cont02 == 0) {
        divAdd02.push(...tela.children)
        cont02++
    }

    console.log(divAdd02)

    const divs = [...tela.children]
    const divRemover = divs[divs.length - 1]

    tela.removeChild(divRemover)

    cont03++


})

const adicionar = document.getElementById('adicionar')

adicionar.addEventListener('click', () => {

    tela.parentNode.appendChild(divAdd02[divAdd02.length -cont03])

    cont03--

})