//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maior(numero1, numero2){
    if(parseInt(numero1)  == parseInt(numero2) ){
        return true
    }else{
        return false
    }
}

console.log(maior(0,0))
console.log(maior(0,"0"))
console.log(maior(5,1))