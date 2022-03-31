const funcionario = { nome: "Marcos", salario: 1344 }
const outroFuncionario = { ativo: true, ...funcionario}
console.log(funcionario)
console.log(outroFuncionario)

const grupoA = ['Paulo', 'Andre', 'Claudete']
const grupoFinal = ['Mario', ...grupoA, 'Jessica']
console.log(grupoFinal)