const name = prompt('what name ?')

const dados = []

while(true){
    
    const yesNot = confirm('voce ja visitou alguma cidade ?')

    if(yesNot) {
        const city = prompt('what name city?')
        dados.push(city)
    }else if(!yesNot){
        break
    }
}

console.log(`O ${name} visitou ${dados.length} cidade e foram ele(a) ${dados}`)
