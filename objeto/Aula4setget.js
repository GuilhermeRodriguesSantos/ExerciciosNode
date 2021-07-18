const idade =  {
    _i: 5,
    get i(){
        return this._i++
    },set i(i) {
        this._i = i
    }
}

console.log(idade.i, idade.i)