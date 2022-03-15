const alunos = [
    { nome: 'Pedro', nota: 4.4, bolsista: false },
    { nome: 'Carlos', nota: 7.4, bolsista: true },
    { nome: 'Marcos', nota: 9.2, bolsista: false },
    { nome: 'Otavio', nota: 8.1, bolsista: true },
    { nome: 'Gabriel', nota: 6.9, bolsista: false },
]

// Todos os alunos são bolsistas?
const todosSaoBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsista))

// Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
