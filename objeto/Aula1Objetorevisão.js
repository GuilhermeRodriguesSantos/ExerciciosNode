const carro = {
    modelo: 'fox',
    placa: 'AVD-2939',
    condutor:{
        nome: 'Guilherme',
        idade: 18,
        vendedor:{
            nome: 'antonio josé',
            vendas: 33
        }
    }
}

delete carro.condutor.vendedor
console.log(carro)