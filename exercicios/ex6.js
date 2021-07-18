/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

const resultado = []

function bhascara (ax2, bx, c){
    const bx1 = Math.pow(bx,2)
    const delta = bx1 - (-4 * ax2 * c)
    base1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    base2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    
    
    if(base1 > 0){
        resultado.push(base1)
    }else{
        resultado.push('delta negativo')
    }

    if(base2 > 0){
        resultado.push(base2)
    }else{

        resultado.push('delta negativo')
    }
}

bhascara(3,-5,12)
console.log(resultado)