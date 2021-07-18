function numeros(min,max){
    const valor = Math.random()*(max -min) + min
    return Math.floor(valor)
}

let n = 0
while(n != -1){
    n = numeros (-1,20)
    console.log(`numero escolhido ${n}`)
}
    console.log('até a proxima')