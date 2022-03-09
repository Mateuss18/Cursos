function pessoa(nome){
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p2 = new pessoa('Paulo')
p2.falar()