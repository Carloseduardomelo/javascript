const tela = document.getElementById('tela')
const button = document.getElementById('button')


async function pegar(){
    
    let foto = await fetch('https://api.thecatapi.com/v1/images/search')

    if(foto.status === 200){
        let fotone = await foto.json()
        tela.innerHTML = `<img src="${fotone[0].url}" alt="">`
    }else{
        alert('erro na api')
    }
}

pegar()

button.addEventListener('click', pegar )