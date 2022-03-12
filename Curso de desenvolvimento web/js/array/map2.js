Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Ceneta", "preco": 7.50}',
]

const conversaoParaObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

precos = carrinho.map2(conversaoParaObj).map2(apenasPreco)
console.log(precos)