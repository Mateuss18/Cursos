const pessoa = {
    nome: 'Emanuel',
    idade: 5,
    peso: 18
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '03/05/2020'
})

pessoa.dataNascimento = '03/05/2002'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// ECMA 2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)