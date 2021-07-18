const pilotos = ['Guilherme', 'Felipe', 'Pedro']

//deletando a ultima posição com o pop
pilotos.pop()
console.log(pilotos)

//adicionando com o push
pilotos.push('Pedrinho')
console.log(pilotos)

//deletando o primeira posição com o shift
pilotos.shift()
console.log(pilotos)

//colocando um elemento na primeira posição
pilotos.unshift('Gui')
console.log(pilotos)

//usando splice
pilotos.splice(1,0,'andie','marcos')
pilotos.splice(1,1)
console.log(pilotos)

//slice retorna um novo array
const ultimosPilotos = pilotos.slice(2)
console.log(ultimosPilotos)

const primeirosPilotos = pilotos.slice(0,2)
console.log(primeirosPilotos)