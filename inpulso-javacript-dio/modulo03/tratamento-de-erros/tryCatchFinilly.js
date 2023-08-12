function f(t){
    if(t === 1){
        throw "erro no t"
    }else{
        console.log('foda')
    }
}

try{ //! ele vai fazer uma verificação si de erro ele vai passar para o catch para tratar esse erro.
    f(1)
}catch{ //! caso aqui der erro, fodeu.
    f(2) 
}finally{ //! independete de erro ou de sucesso o finally vai ser executado.
    console.log('tu e corno')
}