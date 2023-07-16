//! execicio de calcular um viagem de carro.

class carroViagens{
    cor;
    marca;
    gastoKm;
    distancia;

    constructor(cor,marca,gastoKm,distancia){
        this.cor = cor
        this.marca = marca
        this.gastoKm = gastoKm
        this.distancia = distancia
    }

    calculo(){
        const valorgas = 5
        console.log(`O carro da marca ${this.marca} vai gasta ${(this.gastoKm / this.distancia * 10) * valorgas} de gasolina em uma distancia de ${this.distancia} KM`)
    }
}

const carro01 = new  carroViagens('rosa', 'gol', 2, 10)

carro01.calculo()