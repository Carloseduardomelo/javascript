const button = document.getElementById('button')

const input01 = document.getElementById('input01')
const input02 = document.getElementById('input02')


button.addEventListener('click' , () =>{
    console.log(Number(input01.value) + Number(input02.value))
})