const funcionario = {
    nome: 'Paulo',
    setor: 'Automação',
    idade: 47,
    experiencia: '13 anos'
}

for(let atributo in funcionario){
    console.log(`${atributo} = ${funcionario[atributo]}`)
}