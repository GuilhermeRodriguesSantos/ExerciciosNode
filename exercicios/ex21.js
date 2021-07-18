//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function numeros (numeros){
    let pares =0
    let impares = 0
    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i] % 2 == 0){
            pares ++
        }else{
            impares++
        }
    }
    console.log(`numeros pares = ${pares} , numeros impares = ${impares}`)
}

vetor = [1,2,3,4,56,7,8,9,9,0]
numeros(vetor)
