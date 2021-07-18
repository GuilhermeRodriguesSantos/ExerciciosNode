const numeros = [1,2,3,4,5]

let resultado = numeros.map(function(numeros){
    return numeros * 2
})

console.log(numeros)
console.log(resultado)

const soma = (s) =>{
    return s + 10
}

const triplo = function(t){
    return t * 3
}

const letras = (l) =>{
    return `R$ = ${parseFloat(l).toFixed(2).replace('.', ',')}`
}

resultado = numeros.map(soma).map(triplo).map(letras)
console.log(resultado)