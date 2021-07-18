function espaco (min, max){
    const total = Math.random() * (max-min) + min
    return Math.floor(total)
}

let numero = -1

do{
    numero = espaco(-10,10)
    console.log(`numero escolhido foi ${numero}!!`)
}while(numero != -1)

console.log(" até a proximaaa")