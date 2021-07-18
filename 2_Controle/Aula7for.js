// com while
/*let i = 0
while(i<=10){
    console.log(i)
    i++
}*/

//com do while
/*let i = 0
do{
    console.log(i)
    i++
}while(i<=10)*/

// com for
/*for(let i = 10; i>0; i--){
    console.log(i)
}*/


/*const numeros = []
for(let i = 0; i<=10; i++){
    numeros.push(i)
        const resto = numeros[i] % 2
        if(resto == 0){
        console.log(`numeros pares = ${numeros[i]}`)
    }
}*/


const numeros = []
for(let i = 0; i<=30; i++){
    numeros.push(i)
}

for(let pares in numeros){
    const resto = numeros[pares] % 2
    if(resto == 0){
        console.log(`${pares}: numeros pares = ${numeros[pares]} !`)
    }
}


