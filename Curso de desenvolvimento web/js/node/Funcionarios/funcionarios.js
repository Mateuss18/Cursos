const url = ('http://files.cod3r.com.br/curso-js/funcionarios.json')
const axios = require('axios')

const mulheres = f => f.genero === 'F'
const chinesas = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})