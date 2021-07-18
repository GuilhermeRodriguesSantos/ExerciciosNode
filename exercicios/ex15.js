/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function numero (n){
    switch(n){
        case 0:{
            return console.log('Zero')
        }
        case 1:{
            return console.log('Um')
        }
        case 2: return console.log('Dois')
        case 3: return console.log('Tres')
        case 4: return console.log('Quatro')
        case 5: return console.log('cinco')
        case 6: return console.log('seis')
        case 7: return console.log('sete')
        case 8: return console.log('oito')
        case 9: return console.log('nove')
        case 10: return console.log('dez')
        default: return console.log('numero inválido')

    }
}
numero(-1)
numero(0)
numero(1)
numero(2)
numero(3)
numero(4)
numero(5)
numero(6)
numero(7)
numero(8)
numero(9)
numero(10)
numero(11)