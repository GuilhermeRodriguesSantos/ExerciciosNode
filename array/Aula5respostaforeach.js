Array.prototype.forEach2 = function(call){
    for(let i = 0; i<= this.length; i++){
        call(this[i],i ,this)
    }
}

const aprovados = ['Guilherme', 'Ana', "Felipe",'Moyses', 'Pedro']

aprovados.forEach2((nome, indice) =>{
    console.log(`${indice +1} = ${nome}`)
})