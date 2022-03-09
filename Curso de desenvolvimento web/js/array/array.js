console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Jayme', 'Claudete')
console.log(aprovados)

aprovados = ['Bia', 'Jayme', 'Claudete']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])

aprovados[3] = 'Paulo'
aprovados.push('Hanna')
console.log(aprovados.length)

aprovados[9] = 'Carlos'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Altera o array deixando em ordem
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Paulo', 'João']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)