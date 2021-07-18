const pessoa = Object.freeze({
    nome:  'Felipe',
    idade: 15
})

console.log(pessoa)
pessoa.nome = 'ana'
console.log(pessoa)
