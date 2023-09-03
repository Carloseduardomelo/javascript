class ConstaBancaria{
    constructor (agencia , numero , tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }


    sacar(valor){
        if(valor > this._saldo){
            return console.log('voce n tem saldo para sacar')
        }

        this._saldo = this._saldo - valor

        return console.log(this._saldo)
    }


    depositar(valor){
        this._saldo += valor

        console.log(this._saldo)
    }
}

class ContaCorrent extends ConstaBancaria{
    constructor(agencia, numero, cartaoCredt){
        super(agencia , numero)
        this._cartaoCredt = cartaoCredt
        this.tipo = 'ContaCorrente'
    }

    get cartaoCredt(){
        return this._cartaoCredt
    }

    set cartaoCredt(valor){
        this._cartaoCredt = valor
    }
}


class ContaPiupanca extends ConstaBancaria{
    constructor(agencia, numero , cartaoCredt){
        super(agencia , numero)
        this.tipo = 'conataPoupança'
    }
}

class ContaUvimr extends ConstaBancaria{
    constructor(agencia, numero , cartaoCredt){
        super(agencia , numero)
        this.tipo = 'ContaUvimr'
    }

    sacar(valor){
        if(valor > 500){
            return console.log('Operação negada')
        }

        this._saldo -= valor
    }
}


const novaConsta = new ConstaBancaria(1 , 222 , true )
const novaCOn02 = new ContaPiupanca(1 , 22)
const nova03 = new ContaUvimr(1 ,44)


novaConsta.depositar(1000)
novaConsta.sacar(500)

novaCOn02.depositar(1000)
novaCOn02.sacar(500)

nova03.depositar(1000)
nova03.sacar(550)

