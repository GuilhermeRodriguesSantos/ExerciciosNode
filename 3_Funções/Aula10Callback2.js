//sem callback
const numeros = [0,1,2,3,4,5,6,7,8,9,10]
const numerosMaiores = []

for(let i in numeros){
    if(numeros[i] > 5){
        numerosMaiores.push(numeros[i])
    }
}

console.log(numerosMaiores)



//com callback
//arrow
/*const numerosMenores = numeros.filter(n => n < 6)
console.log(numerosMenores)*/

//function normal
const numerosMenores = numeros.filter(function(n){
    return n <= 5
})
console.log(numerosMenores)


