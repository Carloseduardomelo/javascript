const num01 = prompt('digite um numero')
const num02 = prompt('digite um numero')


function tudo(){
    return [Number(num01) + Number(num02), num01 * num02 , num01 / num02 , num01 - num02]
}

alert(tudo())