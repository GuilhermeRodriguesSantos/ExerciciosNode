function area(altura, largura){
    const total = (altura * largura) / 2
    if(total >20){
        console.log(`area acima do permitido. ${total}m`)
    }else{
        return total
    }
}

console.log(area(2,10))