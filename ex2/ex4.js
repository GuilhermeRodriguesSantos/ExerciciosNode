/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function mes (numero){
    if(numero == 1){
        console.log('Janeiro')
    }else if(numero == 2){
        console.log('Fevereiro')
    }else if(numero == 3){
        console.log('Março')
    }else if (numero == 4){
        console.log('Abril')
    }else if (numero == 5){
        console.log('Maio')
    }else if (numero == 6){
        console.log('Junho')
    }else if (numero == 7){
        console.log('julho')
    }else if (numero ==8){
        console.log('Agosto')
    }else if (numero == 9){
        console.log('Setembro')
    }else if (numero == 10){
        console.log('Outubro')
    }else if(numero == 11){
        console.log('Novembro')
    }else if (numero == 12){
        console.log('Dezembro')
    }else{
        console.log('Numero invalido')
    }
}
    

mes(1)
mes(4)
mes(0)
mes(13)
