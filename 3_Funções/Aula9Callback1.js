const pizzas = ['mussarela', 'frango', 'calabresa', 'quatro queijos']

function resultado(nome, indice){
    console.log(`${indice + 1 } = ${nome}. Sabor da pizza!`)
}

pizzas.forEach(resultado)
pizzas.forEach(nome => console.log(nome))