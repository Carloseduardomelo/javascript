const button = document.getElementById('button')
const h1 = document.getElementById('h1')
const main =  document.getElementById('main')
const footer = document.getElementById('fod')

let offOn = true


button.addEventListener('click' , () => {
    if(offOn === true ){
        main.classList.add('dark')
        footer.classList.add('darkf')
        h1.innerHTML = 'dark model on'
        offOn = false
    }else{
        main.classList.remove('dark')
        footer.classList.remove('darkf')
        h1.innerHTML = 'light mode on'
        offOn = true

        main.sty
    }
})
