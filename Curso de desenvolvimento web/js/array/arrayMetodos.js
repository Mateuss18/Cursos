const  pilotos = ['Jão', 'Paula', 'Luiz', 'Caarlos']
pilotos.pop()
console.log(pilotos)

pilotos.push('Marcos')
console.log(pilotos)

pilotos.shift() //Remove o primeiro
console.log(pilotos)

pilotos.unshift('Karen')
console.log(pilotos) // Adiciona no primeiro

// Splice pode adicionar e remover elementos 

// adicionar
pilotos.splice(2, 0, 'Gabriel', 'Vini')
console.log(pilotos)

// remover
pilotos.splice(1, 2)
console.log(pilotos)

console.log('---------')
const novosPilotos1 = pilotos.splice(1, 2) // cria novo array
console.log(novosPilotos1)