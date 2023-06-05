
function verificar(){
    var data = new Date()
    const ano = data.getFullYear()
    var fano = document.querySelector('#nunb')
    var respo = document.querySelector('#resp')
    var conte = document.querySelector('.cont')
    if (fano.value.length == 0 || fano.value > ano || fano.value == ano ){
        alert('verifique os dados para continuar')
    }else{
        var fsex = document.getElementsByName('che')
        var idade = ano -  Number(fano.value)
        var genero = ''
        var img =  document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            var genero = 'masculino'
            if (idade >= 0 && idade < 10){
                //crianca
                img.style.background = 'url("imagens/kindH.jpg") top center '
                img.style.backgroundSize = 'cover'
                conte.style.height = '460px'

            }else if (idade < 21){
                //jonven
                img.style.background = 'url("imagens/jovenH.jpg") top center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }else if(idade < 50){
                //adulto
                img.style.background = 'url("imagens/aduldoH.jpg") top center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }else{
                //idoso
                img.style.background = 'url("imagens/idosoH.jpg") top center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }

        }else{
            var genero = 'feminino'
            if (idade >= 0 && idade < 10){
                //crianca
                img.style.background = 'url("imagens/kidM.jpg") top center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }else if (idade < 21){
                //jonven
                img.style.background = 'url("imagens/jovenM.jpg") center center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }else if(idade < 50){
                //adulto
                img.style.background = 'url("imagens/aduldaM.jpg") top center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }else{
                //idoso
                img.style.background = 'url("imagens/idosaM.jpg") center center '
                img.style.backgroundSize = 'cover'
                img.style.backgroundColor = 'black'
                conte.style.height = '460px'
            }

        }

        respo.style.textAlign = 'center'
        respo.innerHTML = `Dectetamos ${genero} com ${idade} ano`
        respo.appendChild(img)
    }

}   