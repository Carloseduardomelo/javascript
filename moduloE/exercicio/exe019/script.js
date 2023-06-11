function clicar(){
    var nun1 = document.querySelector('#numero')
    var nun = Number(nun1.value)
    var tab = document.querySelector('#tabu')
    if (nun ==0){
        alert('erro')
    }else{
        tab.innerHTML =''
        var c = 1
        while(c <= 10 ){
            var item = document.createElement('option')
            item.text = `${nun} x ${c} = ${nun * c}`
            tab.appendChild(item)
            c++
        }
    }
}