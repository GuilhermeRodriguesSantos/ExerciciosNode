/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/


function verificar(numero){
    const resto = numero % 3
    if(resto == 0){
        return true
    }else{
        return false
    }
}

console.log(verificar(125))