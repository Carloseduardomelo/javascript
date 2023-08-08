let para = document.querySelector('#p')

let soma = document.querySelector('#soma')
let sub = document.querySelector('#sub')

soma.addEventListener('click' , function(){
    para.innerHTML ++
})

sub.addEventListener('click' , function(){
    para.innerHTML --
    if(para.textContent < 0){ //! o textcontent vai pegar o text que estar dentro da tga p
        para.style.color = 'red'
    }
})

console.log(soma)
console.log(sub)