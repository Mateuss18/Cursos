const aprovados = ['Fernando', 'Luiz', 'Wesley', 'Alexandre']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}- ${nome}`)
})

console.log("\n")

aprovados.forEach(nome => console.log(nome))

console.log("\n")

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)