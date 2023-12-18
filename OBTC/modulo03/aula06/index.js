const buttonAdd = document.getElementById('buttonAdd')
const buttonRemove = document.getElementById('buttonRemove')
const ul = document.getElementById('list-tarefa')

buttonAdd.addEventListener('click' , () => {
    const nameTarefa = prompt('digite o nome da tarefa')

    const novaLi = document.createElement('li')
    novaLi.innerText = nameTarefa

    ul.appendChild(novaLi)
})
buttonRemove.addEventListener('click' , () => {
    if(ul.children.length == 0){
        alert('não tem item s lista para remover')
    }else{
        ul.removeChild(ul.lastElementChild)
    }
})