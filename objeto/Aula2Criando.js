function produto (nome, preco, desconto){
    this.nome = nome
    this.getDesconto = function(){
        return preco * (1 - desconto)
    } 
}

/*const pro1 = new produto('shappo',30,0.22)
console.log(pro1.getDesconto())*/

//função factory
function criarPessoa (nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
         return (salario /30) * (30 - faltas) 
        }
    }
}

const pedro = new criarPessoa('Pedro', 4000, 3)
console.log(pedro.getSalario())