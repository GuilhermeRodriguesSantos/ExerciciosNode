const ferrari = {
    modelo: 'F40',
    velocidademax: 300
}

const volvo = {
    modelo: 'V40',
    velocidademax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)