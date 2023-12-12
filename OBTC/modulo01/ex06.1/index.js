while(true){
    const palavra = prompt('digite uma palavra para ver si ela e Palíndromos')
    
    let palavras = [...palavra]
    
    palavras.reverse()
    
    if(palavra == palavras.join('')){
        alert('A palavra que voce digitou e um Palíndromos')
    }else{
        alert('A palavra não eu um Palíndromos')
    }
}
