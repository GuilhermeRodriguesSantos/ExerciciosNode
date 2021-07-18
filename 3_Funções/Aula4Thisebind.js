const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}


pessoa.falar()


const falar2 = pessoa.falar.bind(pessoa)
falar2()