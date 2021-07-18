function aula (nome, id){
    this.nome = nome
    this.id = id
}

const aula1 = new aula('aula1',123)
const aula2 = new aula('aula2',453)
console.log(aula1,aula2)

function novo(p , ...a){
    const obj = {}
    obj.__proto__ = p.prototype
    p.apply(obj , a)
    return obj
}


const aula3 = novo(aula,'aula3',22)
console.log(aula3)