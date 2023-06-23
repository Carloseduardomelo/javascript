function par_ou_impar(n){
    if (n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = par_ou_impar(11)
console.log(res)