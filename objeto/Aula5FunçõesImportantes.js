const pessoa = {
    nome: 'Guilherme',
    idade: 18,
    peso: 67
}

// objetos importantes
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//percorendo o Objeto
Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave} = ${valor}`)
})

Object.defineProperty(pessoa, 'dtnascimento', {
    enumerable: true,
    writable: false,
    value: '02/05/2002'
})

pessoa.dtnascimento = '01/01/2000'
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))


//Objeto.assing

const p = {nome: 'felipe'}
const i = {idade: 15}
const pe = {pesso: 54}


Object.assign(p,i,pe)
Object.freeze(p)
p.idade = 37
console.log(p)
