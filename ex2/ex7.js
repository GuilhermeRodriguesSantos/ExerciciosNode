/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado*/

let retorno = []
function repete (elemento,repetidor){
  for(let i = 1; i<= repetidor; i++){
        retorno.push(elemento)
        
  }
  console.log(retorno)
}

repete('Codigo', 2)
repete(7,3)