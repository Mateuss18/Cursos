const acessoA = require('../../moduloA')

console.log(acessoA.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}), listen(8000)