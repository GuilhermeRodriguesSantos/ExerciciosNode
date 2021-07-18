// sem callback

const numeros = []
const numerosPares = []
for(let i = 0; i<=20; i++){
    numeros.push(i)
}

/*for(let pares in numeros){
    const resto = numeros[pares] % 2
    if(resto == 0){
        numerosPares.push(numeros[pares])    
    }
}

console.log(numerosPares)
*/

const numerosIpares = numeros.filter( function(impares){
    const resto = impares % 2
    if(resto == 1){
        return impares
    }
})


console.log(numerosIpares)




let pare = []
function pares (numero){
    const resto = numero % 2
    if(resto == 0){
        pare.push(numero) 
    }
}


numeros.forEach(pares)
console.log(pare)