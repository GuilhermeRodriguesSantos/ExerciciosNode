const alunos = [
    {nome: 'Guilherme', nota:9.9},
    {nome: 'felipe', nota:6.9},
    {nome: 'jonas', nota:3.9},
    {nome: 'pedro', nota:7.9}
]

const resultado = alunos.map(e => e.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)