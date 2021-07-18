function situacao (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('aprovado com honra')
                break
        case 8:
        case 7:
            console.log('aprovado')
                break
        case 6:
        case 5:
        case 4:
            console.log('Recuperaçao')
                break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
                break
        default:
            console.log('nota invalida')
    } 

}

situacao(9)
situacao(7)
situacao(5)
situacao(2)
situacao(21)