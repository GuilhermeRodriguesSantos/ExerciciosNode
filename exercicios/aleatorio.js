function sorteio(min, max){
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

console.log(sorteio(0,30))