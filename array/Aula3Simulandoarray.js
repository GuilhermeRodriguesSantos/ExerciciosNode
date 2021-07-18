const quase = {0: 'gui', 1: 'felipe', 2: 'pedro'}
console.log(quase)

Object.defineProperty(quase , 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quase[1])

const oi = ['oi', 'oii']
console.log(oi, quase.toString())