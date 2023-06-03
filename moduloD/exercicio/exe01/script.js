//chamado as tag do html
var fundo = document.querySelector('#fund')
var quadro = document.querySelector('#qua')
var agora = document.querySelector('#ag')
var foto = document.querySelector('#fot')
var h1 = document.querySelector('#h')
var pe = document.querySelector('#foot')

//pegando hora atual
var hora = 19
//var hor = new Date()
//var hora = hor.getHours()

if (hora >= 6 && hora < 12) {
    foto.style.background = 'url("imagens/manha02.png")center center'
    foto.style.backgroundSize = 'cover'
    fundo.style.background = '#f8fa87'
    agora.innerHTML = `Agora são ${hora} Horas`
}else if(hora > 12 && hora < 18){
    foto.style.background = 'url("imagens/tarde.png") center center'
    foto.style.backgroundSize = 'cover'
    fundo.style.background = '#faaf4d'
    agora.innerHTML = `Agora são ${hora} Horas`
}else{
    foto.style.background = 'url("imagens/4124608_24033.jpg") center center'
    foto.style.backgroundSize = 'cover'
    fundo.style.background = '#584646'
    agora.innerHTML = `Agora são ${hora} Horas`
    h1.style.color = 'white'
    pe.style.color = 'white'
}

