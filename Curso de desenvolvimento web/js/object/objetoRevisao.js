const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'GOL',
    valor: 39993,
    proprietario: {
        nome: 'Marcos',
        idade: 24,
        endereco:{
            logradouro: 'Rua oi',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Nicolas',
        idade: 18
    }, {
        nome: 'Claudete',
        idade: 45
    }],
    calcularValorSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 9000
carro['proprietario']['endereco']['logradouro']
console.log(carro)


