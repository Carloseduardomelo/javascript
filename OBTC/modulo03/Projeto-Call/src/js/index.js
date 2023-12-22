const main = document.getElementById('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const result = document.getElementById('result')
const copi = document.getElementById('copyToClipboard')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const clear = () => {
    input.value = ''
    input.focus()
}

const calcular = () => {
    console.log('calculou')

    const resultEval = eval(input.value)

    if(resultEval == 'Infinity'){
        alert('O numero e muito grande para calcular')
        input.value  = ''
    }else{
        result.value = resultEval
        input.value = ''
    }

}

document.getElementById('clear').addEventListener('click' , clear)



document.querySelectorAll('.charKey').forEach((item) => {
    item.addEventListener('click' , () => {
        result.value = ''
        const value = item.dataset.value
        input.value += value
        copi.innerText = 'copy'
        copi.classList.remove('success')
    })
})

document.getElementById('equal').addEventListener('click' , calcular)

copi.addEventListener('click' , () => {

    if(result.value == ''){
        alert('Não tem nada para copiar seu animal')
        copi.innerText = 'copy'
    }else{
        copi.innerText = 'Copied'
        copi.classList.add('success')
        navigator.clipboard.writeText(String(result.value)) //! Para copiar um text do result para a area de transferencia
    }

    
})

input.addEventListener('keydown' , (ev) => {
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        copi.innerText = 'copy'
        copi.classList.remove('success')
        result.value = ''
        input.value += ev.key
        return
    }

    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0 , -1)
        return
    }

    if(ev.key === 'Enter'){
        calcular()
    }

    if(ev.key === 'c'){
        clear()
    }
})

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })
