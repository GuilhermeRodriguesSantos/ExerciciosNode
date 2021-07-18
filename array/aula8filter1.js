const produtos = [
    {nome: 'bicicleta', preco: 500, fragil: false},
    {nome: 'carro', preco: 2500, fragil: true},
    {nome: 'lapis', preco: 5, fragil: true},
    {nome: 'vidro', preco: 50, fragil: true}
]

let acima = (function(e){
    return e.preco > 400
})

let f = ((f) =>{
    return f.fragil == false
})

console.log(produtos.filter(acima).filter(f))
