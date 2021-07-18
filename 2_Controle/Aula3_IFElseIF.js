Number.prototype.entre = function(min, max){
    return this >= min && this <= max
}

const situação = (nota) =>{
    if(nota.entre(9,10)){
        console.log('aprovado com metiro')
    }else if(nota.entre(7,8)){
        console.log('Aprovado')
    }else if(nota.entre(4,6)){
        console.log('Recuperação')
    }else if(nota.entre(0,3)){
        console.log('Reprovado')
    }else{
        console.log('numero invalido')
    }
}

situação(9)
situação(7)
situação(5)
situação(3)
situação(11)
