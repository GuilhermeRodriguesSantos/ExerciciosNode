/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function saberTriangulo (n1,n2,n3){
    if(n1 == n2 && n2 == n3 ){
        console.log('triangulo Equilatero')
    }else if(n1 == n2 || n1 == n3 || n3 == n2 ){
        console.log('triangulo isosceles')
    }else{
        console.log('triangulo escaleno')
    }
}

saberTriangulo(4,5,2)
