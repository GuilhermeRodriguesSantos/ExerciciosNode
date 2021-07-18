const pai = {nome: 'josé' , cordobelo:'azul'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)
console.log(filha1.cordobelo)

const filha2 = Object.create(pai, {
    nome: {enumerable: true, writable:false, value:'vitoria'}
})

console.log(filha2)
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`herança ${key}`) 
    
}