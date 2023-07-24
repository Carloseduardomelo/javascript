let cromisse = new Promisse((certo) => {
    setTimeout(() => {
        let ramdom = parseInt(Math.random() * 2)
        certo(ramdom)
    }, 1000)
})

cromisse.then((value) => {
    console.log(value)
})