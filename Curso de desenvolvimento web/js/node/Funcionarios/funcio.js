const funcionarios = [
    { nome: 'Paula', pais: 'China', genero: 'F' },
    { nome: 'Marcia', pais: 'Russia', genero: 'F' },
    { nome: 'Joana', pais: 'China', genero: 'F' },
    { nome: 'Ricardo', pais: 'China', genero: 'M' },
    { nome: 'Jonas', pais: 'Alemanha', genero: 'M' }
]

const mulher = funcionarios => funcionarios.genero == 'F'
const china = funcionarios => funcionarios.pais == 'China'
console.log(funcionarios.filter(mulher).filter(china))