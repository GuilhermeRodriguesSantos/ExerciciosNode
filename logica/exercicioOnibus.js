
function entranoOnibus(saldo, saldo_bilete = 2, valor_passagem = 5, dinhero = 6) {
    if(saldo_bilete >= valor_passagem){
        saldo=saldo_bilete - valor_passagem
        console.log(`passar catraca com bilete ${saldo} reais, restante`)
    }else{
        console.log(`saldo insuficiente ${saldo_bilete}`)
    }


    if( dinhero > valor_passagem){
        let saldo = dinherio - valor_passagem
        console.log(saldo)
    }else if(dinherio < valor_passagem){
        console.log( `dinherio insuficiente ${dinherio}`)       

}
    }
   

entranoOnibus()