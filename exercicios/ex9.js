//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial (numero, n = numero){
    for(let i = numero -1; i >= 2; i --){
        numero *= i
    }
    console.log(`fatoria de ${n} = ${numero}`)
}

fatorial(6)