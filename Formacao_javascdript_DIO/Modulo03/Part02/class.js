// var nada = class {
//     nome;
// }

// console.log()

// nada.nome = 'carlos'

// console.log(nada)


class Carro {
    marca;
    cor;
    gastoPorLitro;

    constructor(marca, cor, gastoPorLitro) {
        this.marca = marca
        this.cor = cor
        this.gastoPorLitro = gastoPorLitro
    }

    calcularGastoDoPercurso(distanciaEmKm, precoDoConbustivel) {
        return console.log((distanciaEmKm * this.gastoPorLitro) * precoDoConbustivel)
    }

}

const corsa = new Carro('Chevrolet', 'Branco', 0.1)

corsa.calcularGastoDoPercurso(70, 5)

function Carro02(marca, cor, gast) {
    this.marca = marca
    this.cor = cor
    this.gast = gast
    this.cal = function (dis, predoco) {
        return console.log((dis * this.gast) * predoco)
    }
}

let carro1 = new Carro02('gol', 'black', 1)

carro1.cal(70, 5)