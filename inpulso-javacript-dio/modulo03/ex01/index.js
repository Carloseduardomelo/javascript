let n1 = 11
let n2 = 7
function sla(n1,n2) {
    let igual
    let total = n1 + n2
    n1 === n2 ? igual = `${n1} e igual a ${n2}. ` : igual = `${n1} não e igual a ${n2}. `
    if(total  >=10 && total <=20){
        igual += `Sua soma é ${total}, que é maior que 10 e menor que 20.`
    }else if(total <10){
        igual += `Sua soma é ${total}, que é menor que 10 e menor que 20.`
    }else if(total > 20){
        igual += `Sua soma é ${total}, que é maior que 10 e maior que 20.`
    }
    return console.log(igual)
}
sla(n1 , n2)