function clicar(){
    var ini = document.querySelector('#nunb')
    var fim = document.querySelector('#nunb2')
    var paso = document.querySelector('#nunb3')
    var resp =  document.querySelector('#res')

        if (ini.value.length == 0 || fim.value.length == 0 || paso.value.length == 0){
            resp.innerHTML = `inposivel contar`
            alert('faltam dados preencha os dados?')
        }else{
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(paso.value)
            if ( i < f){
                //contagen crecente
                for(var c = i; c <= f; c += p){
                resp.innerHTML += ` ${c} \u{1F449}`
                }
            }else{
                //contagen regresiva
                for(var c = i; c >= f; c -= p){
                resp.innerHTML += ` ${c} \u{1F449}`
                }
        }
    }
    resp.innerHTML += `\u{1F3c1}`
}




































/*
var resp =  document.querySelector('#res').createElement('p')
resp.setAttribute('class', 'res2')

resp.innerHTML = 'carlos'
*/