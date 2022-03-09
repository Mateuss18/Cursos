const quaseArray = { 0: 'Rafael', 1: 'Marcos', 2: 'Jayme' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Marcos', 'Jayme']
console.log(quaseArray.toString(), meuArray)