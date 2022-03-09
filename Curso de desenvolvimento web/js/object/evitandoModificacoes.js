const produto = Object.preventExtensions({
    nome: 'Pão', preco: 2.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Gato'
produto.descricao = 'Gato de brinquedo'
delete produto.tag
console.log(produto)

const pessoa = { nome: 'Natalia', idade: 22 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)