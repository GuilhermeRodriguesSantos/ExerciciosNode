const notas = [5,7,8,9,4]

for(let i in notas){
    console.log(`${i} = ${notas[i]}`)
}

const pessoa = {
    nome:  'Guilherme',
    idade: 18,
    trabalha:  'não'
}

for(let dados in pessoa){
    console.log(`${dados} = ${pessoa[dados]}`)
}