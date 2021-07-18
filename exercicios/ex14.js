/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function salario (planoDeTrabalho, salarioAtual){
    switch(planoDeTrabalho){
        case 'A':{
            let resultado = (salarioAtual * 10) / 100
            let novoSalario = salarioAtual + resultado
            console.log(`O almento foi de 10%, seu salario era ${salarioAtual}, novo salario: ${novoSalario}`)
            break
        }
        case 'B':{
            resultado = (salarioAtual * 15) / 100
            novoSalario = salarioAtual + resultado
            console.log(`O almento foi de 15% seu salario era ${salarioAtual}, novo salario: ${novoSalario}`)
            break
        }
        case 'C':{
            resultado = (salarioAtual * 20) / 100
            novoSalario = salarioAtual + resultado
            console.log(`O almento foi de 20%, seu salario era ${salarioAtual}, novo salario: ${novoSalario}`)
            break
        }
        default:{
            console.log('Plano Inválido')
        }
    }
}

salario('A', 2000)
salario('B',2000)
salario('C',2000)
salario('D', 2000)