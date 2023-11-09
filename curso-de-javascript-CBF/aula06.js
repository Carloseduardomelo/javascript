//! operadores logicos

/*
?     && = and // os dois tem que ser verdade 
?    
?     || = or // so um basta ser verdade
?    
?     ! = not // negasão exemple: !true = false
*/

let num01 = 10 , num02 = 10

if(num01 === 10 && num02 === 10){
    console.log('passou pelo and no  true e true')
}else if(num01 === 5 && num02 === 10){
    console.log('passou pelo and no false e true')
}

if(num01 === 10 || num02 === 10){
    console.log('passou pelo or no true e true')
}else if(num01 === 5 || num02 === 10){
    console.log('passou pelo or no false e true')
}

console.log(!true)
console.log(!false)