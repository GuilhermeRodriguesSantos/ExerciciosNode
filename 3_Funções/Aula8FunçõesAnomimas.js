const soma = function(a,b){
    return a + b
}

const resultado = function(a,b, resultado = soma){
    console.log(resultado(a,b))
}

resultado(1,5)
resultado(7,7)
resultado(10,2, function(a,b){
    return a /b
})
resultado(10,2, (a,b) =>{
    return a * b 
})