/*const avo = {att1: 'A'}
const pai = {__proto__: avo, att2:'B'}
const filho =  {__proto__:pai, att3:'C'}
console.log(filho.att2,filho.att3, filho.att1)*/

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 250,
    acelerar(delta){
        if(this.velocidadeAtual + delta <= this.velocidadeMaxima){
            return this.velocidadeAtual += delta
        }else{
            return this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status(){
        return `${this.velocidadeAtual}Km de ${this.velocidadeMaxima}`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 400
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo} ${super.status()}`
    }    
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(360)
console.log(ferrari.status())
volvo.acelerar(220)
console.log(volvo.status())

