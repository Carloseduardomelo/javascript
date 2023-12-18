const posicao = document.getElementById('poci')
const nameJogador = document.getElementById('nameJogador')
const numberCamisa = document.getElementById('numberCamisa')
const buttonEscalar = document.getElementById('escalar')
const form = document.getElementById('add')
const removerInput = document.getElementById('inputRemover')
const buutonRemover = document.getElementById('buttonRemover')



const escalacao = [[]]

buttonEscalar.addEventListener('click', () => {

    if (posicao.value == '' || nameJogador.value == '' || numberCamisa == '') {
        throw new Error('preencha')
    } else {
        const confirme = confirm('tem serteza que quer escalar ele ?')
        if (confirme) {
            escalacao.push([
                posicao.value,
                nameJogador.value,
                numberCamisa.value,
            ])
            posicao.value = ''
            nameJogador.value = ''
            numberCamisa.value = ''
            console.log(escalacao)
        } else {
            alert('foi triste para o jogador')
        }
    }
})

buutonRemover.addEventListener('click' , () => {

    // escalacao.map((item) =>{
    //     if(escalacao.indexOf(removerInput.value) != -1){
    //         const resposta = prompt('deseja tira esse jogar ?')

    //         if(resposta){
    //             escalacao.splice(removerInput.value , 1)
    //         }else{
    //             alert('jogador não removido')
    //         }
    //     }else{
    //         alert('esse jogador não existe na escalação')
    //     }
    // })

    for(let i = 0 ; i <= escalacao.length; i++){
        if(escalacao[i].indexOf(removerInput.value) > -1){
            const resposta = confirm('deseja tira esse jogar ?')

            if(resposta){
                escalacao.splice(i, 1)
                console.log(escalacao)

                removerInput.value = ''
            }else{
                alert('jogador não removido')
            }
        }
    }
})
