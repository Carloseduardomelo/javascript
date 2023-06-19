var num = document.querySelector('#nub')
var opc = document.querySelector('#opc')
var res = document.querySelector('#res')
var dados = []

function inNumero(n){
    if (Number(n)  >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n , d){
    if (d.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if (inNumero(num.value) && !inLista(num.value, dados)){
        dados.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado `
        opc.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('esse valor ja esta na lista ou o valor e invalido')
    }
    num.value = ''
    num.focus()
}

function resul(){
    if (dados.length == 0){
        alert('adicione o valor andes de finalizar')
    }else{
        var total = dados.length
        var maior =[0]
        var menor = dados[0]
        for(var pos in dados){
            if(dados[pos] > maior){
                maior = dados[pos]
            }if (dados[pos] < menor){
                menor = dados[pos]
            }
        }

        var totalS = 0
        for(var c in dados){
            totalS += dados[c]
        }
        var totalM = totalS / total
        res.innerHTML = ''
        res.innerHTML += `<p> ao total temos ${total} de numeros cadrastados </p>`
        res.innerHTML += `<P> O maior numero e ${maior} </p>`
        res.innerHTML += `<p> O menor numero e ${menor} </p>`
        res.innerHTML += `<p> A soma dos numeros e ${totalS} </p>`
        res.innerHTML += `<p> A media dos numeros e ${totalM.toFixed(2)} `
    }
}