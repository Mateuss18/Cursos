const times = new Set()
times.add('Corinthians')
times.add('Palmeiras').add('Santos').add('Cruzeiro')
times.add('Santos')

console.log(times)
console.log(times.size)
console.log(times.has('santos'))
console.log(times.has('Santos'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const comidas = ['Lanche', 'Pao', 'Banana']
const comidasSet = new Set(comidas)
console.log(comidasSet)