//! execicio para  criar uma class quer represente uma pessoa e que possa calcular imc

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calculoImc(){
        let Imcres = ''
        var IMC = this.peso / (this.altura *  this.altura)
        if(IMC < 18.5){
            Imcres = "normal"
            console.log(`O IMC do ${this.nome} e ${IMC} e ele esta com ${Imcres}`)
        }else if(IMC >= 18.5 && IMC < 25){
            Imcres = "sobrepeso"
            console.log(`O IMC do ${this.nome} e ${IMC} e ele esta com ${Imcres}`)
        }else if(IMC >= 25 && IMC < 30){
            Imcres = "obesidade"
            console.log(`O IMC do ${this.nome} e ${IMC} e ele esta com ${Imcres}`)
        }else if(IMC > 30 ){
            Imcres = "obesidade mórbida"
            console.log(`O IMC do ${this.nome} e ${IMC} e ele esta com ${Imcres}`)
        }
    }
}

var pessoa01 = new Pessoa('maria',200,1.8)

pessoa01.calculoImc()