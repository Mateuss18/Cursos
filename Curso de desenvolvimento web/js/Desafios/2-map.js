// Retornar um array apenas com os preços

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Ceneta", "preco": 7.50}',
]


const conversaoParaObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

precos = carrinho.map(conversaoParaObj).map(apenasPreco)
console.log(precos)