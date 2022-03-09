const ferrari = {
    modelo: 'FF',
    velMax: 123
}

const polvo = {
    modelo: 'VOLV',
    velmax: 200
}  

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(polvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)