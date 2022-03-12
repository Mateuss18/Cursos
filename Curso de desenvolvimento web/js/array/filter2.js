Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i< this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray 
}

const produtos = [
    { nome: 'Celular', preco: 2000, fragil: true },
    { nome: 'Camera', preco: 4000, fragil: true },
    { nome: 'Bola', preco: 12, fragil: false },
    { nome: 'Mascara', preco: 1800, fragil: false },
    { nome: 'Computador', preco: 150, fragil: true }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))