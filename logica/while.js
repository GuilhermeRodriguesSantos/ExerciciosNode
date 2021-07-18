// vendo os numeros pares de 0 a 50, usando while e if

let numero = 0
while(numero <= 50){
    numero++
    const par = numero % 2
    if(par == 0){
        console.log(numero)
    }
}