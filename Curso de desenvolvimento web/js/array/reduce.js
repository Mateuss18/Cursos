const alunos = [
    { nome: 'Pedro', nota: 4.4, bolsista: false },
    { nome: 'Carlos', nota: 7.4, bolsista: true },
    { nome: 'Marcos', nota: 9.2, bolsista: false },
    { nome: 'Otavio', nota: 8.1, bolsista: true },
    { nome: 'Gabriel', nota: 6.9, bolsista: false },
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    
    return acumulador + atual
})
 
console.log(resultado)