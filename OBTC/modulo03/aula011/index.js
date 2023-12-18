const button = document.getElementById('button')
const div = document.getElementById('div')

button.addEventListener('click' , (ev) =>{
    console.log(ev.currentTarget.parentNode.children.name.value)
    console.log(ev)
})


div.addEventListener('click' ,(ev) =>{
    console.log(ev)
})