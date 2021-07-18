// fazendo fatorial com o laço for
function fatorial(numero, n = numero){
for(let i = numero - 1; i>=2; i--){
     numero *= i 
  }
    console.log(`Fatorial do número ${n} = ${numero}`)
}

fatorial(5)
fatorial(6)
fatorial(7)