let saldo = Number(prompt('quanto voce tem de dinnheiro?'))

while (true) {
    const opc = Number(prompt(`
        ${saldo}

        [1] depositar
        [2] sacar
        [3] sair
    `))


    if (opc == 1) {
        const depositar = Number(prompt('digite o valor para o deposito'))
        saldo += Number(depositar)
    } else if (opc == 2) {
        const sacar = Number(prompt('digeti o valor a ser sacado'))
        saldo -= sacar
    } else {
        break
    }
}