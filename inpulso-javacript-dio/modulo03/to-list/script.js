let input = document.querySelector('#inp')
let but = document.querySelector('#but')
let cont = document.querySelector('#cont')

let tarefas = []

but.addEventListener('click', () =>{
    cont.innerHTML += `<input type="checkbox" /> ${input.value} <br>`
})