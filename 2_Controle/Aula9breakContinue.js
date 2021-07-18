const numeros = []

let i = 1
while(i<=10){
    numeros.push(i)
    i++
}


for(let a in numeros){
    if(a == 5){
        break
    }
    console.log(`indice ${a} = ${numeros[a]}`)
}

for(let  b in numeros){
    if(b==5){
        continue
    }
    console.log(`indice ${b} = ${numeros[b]}`)

}