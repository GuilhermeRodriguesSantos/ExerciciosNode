function carro (velocidadeMaxima = 100, delta = 5){
    let velocidadeAtual = 0
    this.acelerar = function(){
        if(velocidadeAtual < velocidadeMaxima + delta){
            return velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.v = function(){
        return velocidadeAtual
    }
}

uno = new carro()
uno.acelerar()
uno.acelerar()
console.log(uno.v())