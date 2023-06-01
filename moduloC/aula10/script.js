let a = window.document.querySelector('#area')
a.addEventListener('click',clicar)
a.addEventListener('onmouseenter', entrar)
a.addEventListener('onmouseout', saiu)


function clicar(){
    a.innerHTML = 'carlos'
    a.style.background = 'red'
}
function entrar(){
    a.innerHTML = 'entrou'
}
function saiu(){
    a.innerHTML = 'saiu'
    a.style.background = '#68d321'
}