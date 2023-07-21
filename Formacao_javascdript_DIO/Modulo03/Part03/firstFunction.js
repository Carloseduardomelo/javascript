//! frist e a forma de passar funtion como parametros.

//? exemple

function falar(){
    console.log('eu falo')
}

function merda(falar){
    falar()
    console.log('merda')
}

merda(falar)