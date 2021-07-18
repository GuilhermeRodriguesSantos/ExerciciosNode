/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch*/

function saberdia(dia){
    switch(dia){
    case 1: console.log(`Domingo =  final de semana`)
    break
    case 2: console.log('segunda = dia util ')
    break
    case 3: console.log('terça = dia util ')
    break
    case 4: console.log('quarta = dia util ')
    break
    case 5: console.log('quinta = dia util ')
    break
    case 6: console.log('sexta = dia util ')
    break
    case 7: console.log('sabado = final de semana ')
    break
    default: console.log('numero invalido')
    }
}

saberdia(1)
saberdia(3)
saberdia(4)
saberdia(7)
saberdia(9)