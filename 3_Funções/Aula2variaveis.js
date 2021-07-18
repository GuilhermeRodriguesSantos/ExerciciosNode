function soma(){
    let resul =  0
    for(let i in arguments){
        resul += arguments[i]
    }
    return resul
}

console.log(soma(5,5,5,5,55))

