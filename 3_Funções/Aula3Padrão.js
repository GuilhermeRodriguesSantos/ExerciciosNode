// primeira forma de atribuir valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1 
    return a+b+c
}

console.log(soma1(2,2,2),soma1(2), soma1(0,0,0))

// segunda forma
function soma2(a,b,c){
   a = a !== undefined ? a : 1
   b = 1 in arguments ? b : 1
   c =  isNaN(c)? 1:c
   return a + b +c 
}

console.log(soma2(0,0,0))


// terceira forma

function soma3(a =1, b=1, c=1){
    return a + b + c
}


console.log(soma3(0,0,0))