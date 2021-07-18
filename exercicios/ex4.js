/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores*/

function dividir (dividendo, divisor){
    const resultado = dividendo / divisor
    resto = dividendo % divisor
    console.log(`Resultado eh ${resultado}, e o resto ${resto}`)
}

dividir(100,7)