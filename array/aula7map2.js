const carrinho = [
    '{ "nome": "caderno", "preco": 13.77}'
   
]
let novo = []
const tirar = json => JSON.parse(json)
const burro = e => e.preco

novo = carrinho.map(tirar).map(burro)
console.log(novo)

