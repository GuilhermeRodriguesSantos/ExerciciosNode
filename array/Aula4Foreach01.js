const aprovados = ['Guilherme', 'Ana', "Felipe",'Moyses', 'Pedro']
aprovados.sort()
console.log(aprovados)

aprovados.forEach((nome, indice) =>{
    console.log(`${indice +1} = ${nome}`)
})