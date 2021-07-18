const clienteDanilo ={
    nome: 'Danilo',
    senha: 'Danilo123',
        produtosComprados:{
               pão_2unidades: 0.60,
               mortadela:  2.50,
               mussarela: 3.00,
               leite: 5.00
        }
}

function padaria (saldo = 300){
        saldo = saldo + clienteDanilo.produtosComprados.pão_2unidades
        saldo = saldo + clienteDanilo.produtosComprados.mortadela
        saldo = saldo + clienteDanilo.produtosComprados.mussarela
        saldo = saldo + clienteDanilo.produtosComprados.leite
        console.log(`saldo da padaria = ${saldo}`)
}

padaria()


