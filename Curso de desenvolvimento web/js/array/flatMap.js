const escola = [{
    nome: 'Turma A',
    alunos:[{
        nome: 'Carol',
        nota: 9.2
    }, {
        nome:'Anastacia',
        nota: 4.5
    }]
}, {
    nome: 'Turma B',
    alunos:[{
        nome: 'Sergio',
        nota: 7.3
    }, {
        nome: 'Cesar',
        nota: 7.9
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)

console.log([].concat(notas1[0], notas1[1]))