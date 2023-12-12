//! FOR

let par = new Set([])
let impar = new Set([])


for(let i = 0; i < 100; i++){
    if(i%2 == 0) par.add(i)
    if(i%2 ==1) impar.add(i)
}

let a = []
par.forEach(item =>{
    a.push(item)
})
console.log(a.join(' '))

let b = []
impar.forEach(item => {
    b.push(item)
})
console.log(b.join(' '))