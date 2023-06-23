/*const date = new Date().toLocaleString()
console.log(date.slice(10, 19)) //slice para fatiar as string 
if (date.slice(10,12) > 06 && date.slice(10,12) < 12) {
    console.log(`bom dia senhor ja sam ${date.slice(10,12)}horas`)
}if( date.slice(10,12) > 12 ){
    console.log(`Boa tarde senhor ja sam ${date.slice(10,12)}horas`)
}else{
    console.log(`Boa noite senhor ja e${date.slice(10,13)} haras`)
}*/


var date = 6
if (date >=  6 && date < 12){
console.log(`Bom dia senhor ja sam ${date} da Manhã`)
}else if(date > 12 && date < 18){
    console.log(`Boa tarde senhor ja são ${date} da tarde`)
}if(date > 18 && date < 6){
    console.log(`Boa noite senhor ja sçao ${date} da noite`)
}