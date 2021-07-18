/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:{
            let resultado = 3.00 * quantidade
            console.log(`${quantidade} cachorro quente = ${resultado}`)
            break
        }
        case 200:{
            resultado = 4.00 * quantidade
            console.log(`${quantidade} Hamburguer = ${resultado}`)
            break
        }
        case 300:{
            resultado = 5.50 * quantidade
            console.log(`${quantidade} cheeseburguer = ${resultado}`)
            break
        }
        case 400:{
            resultado = 7.50 * quantidade
            console.log(`${quantidade} Bauri = ${resultado}`)
            break
        }
        case 500:{
            resultado = 3.50 * quantidade
            console.log(`${quantidade} refri = ${resultado}`)
            break
        }
        case 600:{
            resultado = 2.80 * quantidade
            console.log(`${quantidade} suco = ${resultado}`)
            break
        }
        default:{
            return console.log('produto invalido')
        }
    }
}

cardapio(100,2)
cardapio(200,2)
cardapio(300,2)
cardapio(400,2)
cardapio(500,2)
cardapio(600,2)
cardapio(700,2)